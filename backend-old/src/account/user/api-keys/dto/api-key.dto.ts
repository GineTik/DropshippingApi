import { ApiKeyModel } from '@app/models'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class ApiKeyDto {
	@IsNotEmpty({ message: "Ім'я обов'язкове поле" })
	@IsString({ message: "Ім'я має бути строко" })
	name: string

	@IsOptional()
	@IsString({ message: 'Опис має бути строкою' })
	description: string

	static castToModel(dto: ApiKeyDto): ApiKeyModel {
		return {
			...dto,
			key: crypto.randomUUID()
		}
	}
}
