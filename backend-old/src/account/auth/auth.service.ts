import { TokenService } from '@app/auth'
import { USER } from '@app/constants'
import { UserMessages } from '@app/exceptions'
import { MailService } from '@app/mail'
import { UserModel } from '@app/models'
import { HttpException, Injectable } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { compare, genSalt, hash } from 'bcryptjs'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { UserProfileDto } from '../user/dto/user-profile.dto'
import { AuthDto } from './dto/auth.dto'
import { ConfirmChangePasswordDto } from './dto/confirm-change-password.dto'
import { RegistrationDropshipperDto } from './dto/registration-dropshipper.dto'
import { RegistrationSupplierDto } from './dto/registration-supplier.dto'
import { SuccessAuthDto } from './dto/success-auth.dto'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(USER.MODEL) private readonly userModel: ModelType<UserModel>,
		private readonly tokenService: TokenService,
		private readonly mailService: MailService
	) {}

	async login(dto: AuthDto): Promise<SuccessAuthDto> {
		const user = await this.userModel.findOne({ email: dto.email })
		if (!user) throw new HttpException(UserMessages.InvalidEmailOrPassword, 400)

		const isValidPassword = await compare(dto.password, user.password)
		if (!isValidPassword)
			throw new HttpException(UserMessages.InvalidEmailOrPassword, 400)

		if (!user.emailConfirmed)
			await this.mailService.sendActivationMail(user.email, user.activationCode)

		const tokens = await this.tokenService.generateTokens(user._id)
		return {
			...tokens,
			user: new UserProfileDto(user)
		}
	}

	async registrationDropshipper(dto: RegistrationDropshipperDto) {
		return await this.registrationUser(dto.email, (code) =>
			RegistrationDropshipperDto.toModel(dto, code)
		)
	}

	async registrationSupplier(dto: RegistrationSupplierDto) {
		return await this.registrationUser(dto.email, (code) =>
			RegistrationSupplierDto.toModel(dto, code)
		)
	}

	async activate(_id: Types.ObjectId, activationCode: number) {
		const user = await this.userModel.findOne({ _id, activationCode })
		if (!user) throw new HttpException(UserMessages.ActivationCodeFailed, 400)

		user.emailConfirmed = true
		await user.save()
	}

	async refresh(refreshToken: string): Promise<SuccessAuthDto> {
		if (!refreshToken)
			throw new HttpException(UserMessages.RefreshTokenIsUndefined, 400)

		const result = await this.tokenService.validateRefreshToken(refreshToken)
		if (!result.successfully) throw new HttpException(result.error, 400)

		const newTokens = await this.tokenService.generateTokens(result.userId)
		const user = await this.userModel.findOne({ _id: result.userId })

		return {
			...newTokens,
			user: new UserProfileDto(user)
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

	async confirmChangePassword(
		_id: Types.ObjectId,
		{ code, newPassword }: ConfirmChangePasswordDto
	) {
		const user = await this.userModel.findOne({ _id, activationCode: code })
		if (!user) throw new HttpException(UserMessages.ActivationCodeFailed, 400)

		user.password = await this.hashPassword(newPassword)
		await user.save()
	}

	private generate6NumberCode() {
		return Math.floor(100000 + Math.random() * 900000)
	}

	private async hashPassword(password: string): Promise<string> {
		return await hash(password, await genSalt(10))
	}

	private async registrationUser(
		email: string,
		newUser: (activationCode: number) => Promise<UserModel>
	): Promise<SuccessAuthDto> {
		const candidate = await this.userModel.findOne({ email })
		if (candidate) throw new HttpException(UserMessages.AlreadyExists, 400)

		const activationCode = this.generate6NumberCode()

		console.log(email)
		console.log(newUser)
		console.log(newUser(activationCode))
		const user = await this.userModel.create(await newUser(activationCode))
		await this.mailService.sendActivationMail(user.email, activationCode)

		const tokens = await this.tokenService.generateTokens(user._id)
		return {
			...tokens,
			user: new UserProfileDto(user)
		}
	}
}
