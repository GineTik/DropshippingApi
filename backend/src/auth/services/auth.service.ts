import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { compare, hash } from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { TokenService } from './token.service';
import { MailService } from './mail.service';
import { SuccessAuthDto } from '../dto/success-auth.dto';
import passport from 'passport';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>, 
        private readonly tokenService: TokenService,
        private readonly mailService: MailService,
        private readonly configService: ConfigService
    ) {}

    async login(dto: AuthDto) {
        const user = await this.userModel.findOne({ email: dto.email })
        if (!user) throw new UnauthorizedException('User not found')

        const isValidPassword = await compare(dto.password, user.password)
        if (!isValidPassword) throw new UnauthorizedException('Invalid password')

        return user
    }

    async registration(dto: AuthDto) {
        const candidate = await this.userModel.findOne({email: dto.email})
        if (candidate) throw new Error('User already exists')

        const hashPassword = await hash(dto.password, Number(this.configService.get('SALT')))
        const activationCode = this.generate6NumberCode();
        
        const user = await this.userModel.create({
            email: dto.email,
            password: hashPassword,
            activationCode: activationCode,
        })
        await this.mailService.sendActivationMail(user.email, activationCode)

        const tokens = await this.tokenService.generateTokens(user.id);
        await this.tokenService.saveToken({
            user: user._id,
            refreshToken: tokens.refreshToken
        })

        return { 
            ...tokens, 
            user: <SuccessAuthDto>{
                id: user._id,
                email: user.email,
                isActivated: user.isActivated
            }
        }
    }

    generate6NumberCode() {
        return Math.floor(100000 + Math.random() * 900000)
    }
}
