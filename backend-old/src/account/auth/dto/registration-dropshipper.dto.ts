import { SALT_LENGTH } from '@app/constants'
import { UserModel } from '@app/models'
import { genSalt, hash } from 'bcryptjs'
import { IsEmail, IsString, MinLength } from 'class-validator'

export class RegistrationDropshipperDto {
	@IsEmail()
	email: string

	@IsString()
	@MinLength(6, {
		message: 'Пароль має бути довше 6 символів'
	})
	password: string

	static async toModel(
		dto: RegistrationDropshipperDto,
		activationCode: number
	): Promise<UserModel> {
		return <UserModel>{
			email: dto.email,
			password: await hash(dto.password, await genSalt(SALT_LENGTH)),
			activationCode: activationCode,
			type: 'dropshipper',
			dropshipperSettings: {}
		}
	}
}
