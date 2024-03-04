import { AvailableUserType } from '@app/types'
import { IsEmail, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@IsString()
	@MinLength(6, {
		message: 'Пароль має бути довше 6 символів'
	})
	password: string

	@IsString()
	type: AvailableUserType
}
