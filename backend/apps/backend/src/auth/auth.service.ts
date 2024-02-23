import { AuthDto, ConfirmChangePasswordDto, SuccessAuthDto } from '@app/dto';
import { UserMessages } from '@app/exceptions';
import { UserModel } from '@app/models';
import { HttpException, Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { compare, genSalt, hash } from 'bcryptjs';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { MailService } from '../mail/mail.service';
import { TokenService } from './token/token.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>, 
        private readonly tokenService: TokenService,
        private readonly mailService: MailService,
    ) {}

    async login(dto: AuthDto): Promise<SuccessAuthDto> {
        const user = await this.userModel.findOne({ email: dto.email })
        if (!user) throw new HttpException(UserMessages.InvalidEmailOrPassword, 400)

        const isValidPassword = await compare(dto.password, user.password)
        if (!isValidPassword) throw new HttpException(UserMessages.InvalidEmailOrPassword, 400)

        if (!user.emailConfirmed)
            await this.mailService.sendActivationMail(user.email, user.activationCode)

        const tokens = await this.tokenService.generateAndSaveToken(user._id)
        return { 
            ...tokens, 
            user: {
                id: user._id,
                email: user.email,
                isActivated: user.emailConfirmed
            }
        }
    }

    async registration(dto: AuthDto): Promise<SuccessAuthDto> {
        const candidate = await this.userModel.findOne({email: dto.email})
        if (candidate) throw new HttpException(UserMessages.AlreadyExists, 400)

        const activationCode = this.generate6NumberCode();
        
        const user = await this.userModel.create({
            email: dto.email,
            password: await this.hashPassword(dto.password),
            activationCode: activationCode,
        })
        await this.mailService.sendActivationMail(user.email, activationCode)

        const tokens = await this.tokenService.generateAndSaveToken(user._id)
        return { 
            ...tokens, 
            user: {
                id: user._id,
                email: user.email,
                isActivated: user.emailConfirmed
            }
        }
    }

    async activate(_id: Types.ObjectId, activationCode: number) {
        const user = await this.userModel.findOne({ _id, activationCode })
        if (!user) throw new HttpException(UserMessages.ActivationCodeFailed, 400)

        user.emailConfirmed = true
        await user.save()
    }

    async refresh(refreshToken: string): Promise<SuccessAuthDto> {
        if (!refreshToken) throw new HttpException(UserMessages.RefreshTokenIsUndefined, 400)

        const result = await this.tokenService.validateRefreshToken(refreshToken)
        if (!result.successfully) throw new HttpException(result.error, 400)

        const newTokens = await this.tokenService.generateAndSaveToken(result.userId)
        const user = await this.userModel.findOne({ _id: result.userId })
        
        return {
            ...newTokens, 
            user: {
                id: user._id,
                email: user.email,
                isActivated: user.emailConfirmed
            }
        }
    }

    async changePasswordRequest(_id: Types.ObjectId) {
        const user = await this.userModel.findOne({ _id })
        if (!user) throw new HttpException(UserMessages.InvalidId, 400)
        
        const activationCode = this.generate6NumberCode()
        user.activationCode = activationCode
        await user.save()
        await this.mailService.sendChangePasswordMail(user.email, activationCode)
    }

    async confirmChangePassword(_id: Types.ObjectId, { code, newPassword }: ConfirmChangePasswordDto) {
        const user = await this.userModel.findOne({ _id, activationCode: code })
        if (!user) throw new HttpException(UserMessages.ActivationCodeFailed, 400)

        user.password = await this.hashPassword(newPassword)
        await user.save()
    }

    private generate6NumberCode() {
        return Math.floor(100000 + Math.random() * 900000)
    }

    private async hashPassword(password: string): Promise<string> {
        return await hash(password, await genSalt(10));
    }
}
