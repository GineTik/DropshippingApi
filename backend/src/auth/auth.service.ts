import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { compare, genSalt, hash } from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { TokenService } from './token/token.service';
import { MailService } from '../mail/mail.service';
import { SuccessAuthDto } from './dto/success-auth.dto';
import { Types } from 'mongoose';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>, 
        private readonly tokenService: TokenService,
        private readonly mailService: MailService,
    ) {}

    async login(dto: AuthDto): Promise<SuccessAuthDto> {
        const user = await this.userModel.findOne({ email: dto.email })
        if (!user) throw new UnauthorizedException('Email or password invalid')

        const isValidPassword = await compare(dto.password, user.password)
        if (!isValidPassword) throw new UnauthorizedException('Email or password invalid')

        if (!user.isActivated)
            await this.mailService.sendActivationMail(user.email, user.activationCode)

        const tokens = await this.tokenService.generateAndSaveToken(user._id)
        return { 
            ...tokens, 
            user: {
                id: user._id,
                email: user.email,
                isActivated: user.isActivated
            }
        }
    }

    async registration(dto: AuthDto): Promise<SuccessAuthDto> {
        const candidate = await this.userModel.findOne({email: dto.email})
        if (candidate) throw new HttpException('User already exists', 400)

        // const hashPassword = await hash(dto.password, Number(this.configService.get('SALT')))
        const activationCode = this.generate6NumberCode();
        
        const user = await this.userModel.create({
            email: dto.email,
            password: await hash(dto.password, await genSalt(10)),
            activationCode: activationCode,
        })
        await this.mailService.sendActivationMail(user.email, activationCode)

        const tokens = await this.tokenService.generateAndSaveToken(user._id)
        return { 
            ...tokens, 
            user: {
                id: user._id,
                email: user.email,
                isActivated: user.isActivated
            }
        }
    }

    async activate(_id: Types.ObjectId, activationCode: number) {
        const user = await this.userModel.findOne({ _id, activationCode })
        if (!user) throw new HttpException('Activation code or user id is invalid', 400)

        user.isActivated = true
        user.save()
    }

    async logout(refreshToken: string) {
        await this.tokenService.removeRefreshToken(refreshToken);
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) throw new UnauthorizedException('Refresh token is undefined')

        const result = await this.tokenService.validateRefreshToken(refreshToken)
        if (!result.successfully) throw new UnauthorizedException()

        const newTokens = await this.tokenService.generateAndSaveToken(result.userId)
        return newTokens
    }

    generate6NumberCode() {
        return Math.floor(100000 + Math.random() * 900000)
    }
}
