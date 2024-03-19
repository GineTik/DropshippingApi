import { SALT_LENGTH } from '@app/constants'
import { UserModel } from '@app/models'
import { genSalt, hash } from 'bcryptjs'
import { IsEmail, IsString, MinLength } from 'class-validator'

export class RegistrationSupplierDto {
	@IsEmail()
	email: string

	@IsString()
	@MinLength(6, {
		message: 'Пароль має бути довше 6 символів'
	})
	password: string

	@IsString()
	publicName: string

	@IsString()
	apiName: string

	static async toModel(
		dto: RegistrationSupplierDto,
		activationCode: number
	): Promise<UserModel> {
		return <UserModel>{
			email: dto.email,
			password: await hash(dto.password, await genSalt(SALT_LENGTH)),
			activationCode: activationCode,
			type: 'supplier',
			supplierSettings: {
				publicName: dto.publicName,
				apiName: dto.apiName
			}
		}
	}
}
