import { ApiKeyModel } from '@app/models'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateApiKeyDto {
	@IsNotEmpty({ message: "Ім'я обов'язкове поле" })
	@IsString({ message: "Ім'я має бути рядком" })
	name: string

	@IsOptional()
	@IsString({ message: 'Опис має бути рядком' })
	description: string

	key: string

	static castToModel(dto: UpdateApiKeyDto): ApiKeyModel {
		return {
			...dto
		}
	}
}
