import { AllowedHostModel } from '@app/models'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class AddAllowedHostDto {
	@IsNotEmpty({ message: "Ім'я обов'язкове поле" })
	@IsString({ message: "Ім'я має бути строко" })
	name: string

	@IsOptional()
	@IsString({ message: 'Опис має бути строкою' })
	description: string

	@IsNotEmpty({ message: "Хост обов'язкове поле" })
	@IsString({ message: 'Хост має бути строкою' })
	host: string

	static castToModel(dto: AddAllowedHostDto): AllowedHostModel {
		return {
			...dto
		}
	}
}
