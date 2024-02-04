import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { Types } from "mongoose";
import { InjectModel } from "nestjs-typegoose";
import { TokenModel } from "./models/token.model";

@Injectable()
export class TokenService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        @InjectModel(TokenModel) private readonly tokenModel: ModelType<TokenModel>
    ) {}

    async generateTokens(_id: Types.ObjectId) {
        const payload = { _id }
        const accessToken = await this.jwtService.signAsync(payload, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: '15m'
        })
        const refreshToken = await this.jwtService.signAsync(payload,  {
            secret: this.configService.get('JWT_REFRESH'),
            expiresIn: '30d'
        })

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(token: TokenModel) {
        const foundToken = await this.tokenModel.findOne({user: token.user})
        if (foundToken) {
            foundToken.refreshToken = token.refreshToken
            return foundToken.save()
        } 
        return await this.tokenModel.create(token)
    }

    async generateAndSaveToken(_id: Types.ObjectId) {
        const tokens = await this.generateTokens(_id)
        await this.saveToken({
            user: _id,
            refreshToken: tokens.refreshToken
        })
        return tokens
    }

    async removeRefreshToken(refreshToken: string) {
        await this.tokenModel.deleteOne({ refreshToken })
    }

    async validateRefreshToken(refreshToken: string): Promise<{ successfully: boolean, userId: Types.ObjectId | undefined, error: any }> {
        try {
            const payload = await this.jwtService.verifyAsync(refreshToken, {
                secret: this.configService.get('JWT_REFRESH')
            })
            return { successfully: true, userId: payload._id, error: undefined }
        }
        catch (e) {
            return { successfully: false, userId: undefined, error: e }
        }
    }

    async validateAccessToken(accessToken: string): Promise<{ successfully: boolean, userId: Types.ObjectId | undefined }> {
        try {
            const payload = await this.jwtService.verifyAsync(accessToken, {
                secret: this.configService.get('JWT_SECRET')
            })
            return { successfully: true, userId: payload._id }
        }
        catch (e) {
            return { successfully: false, userId: undefined }
        }
    }
}