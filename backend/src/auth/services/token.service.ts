import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { TokenModel } from "../models/token.model";
import { InjectModel } from "nestjs-typegoose";
import { ModelType } from "@typegoose/typegoose/lib/types";

@Injectable()
export class TokenService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        @InjectModel(TokenModel) private readonly tokenModel: ModelType<TokenModel>
    ) {}

    async generateTokens(_id: string) {
        const payload = { _id }
        const accessToken = await this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: '15m'
        })
        const refreshToken = await this.jwtService.sign(payload,  {
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
}