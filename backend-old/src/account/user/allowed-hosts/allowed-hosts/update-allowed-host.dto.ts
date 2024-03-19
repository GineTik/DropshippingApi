import { AllowedHostModel } from '@app/models'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateAllowedHostDto {
	oldHost: string

	@IsNotEmpty({ message: "Хост обов'язкове поле" })
	@IsString({ message: 'Хост має бути строкою' })
	newHost: string

	@IsNotEmpty({ message: "Ім'я обов'язкове поле" })
	@IsString({ message: "Ім'я має бути строко" })
	name: string

	@IsOptional()
	@IsString({ message: 'Опис має бути строкою' })
	description: string

	static castToModel(dto: UpdateAllowedHostDto): AllowedHostModel {
		return {
			host: dto.newHost,
			name: dto.name,
			description: dto.description
		}
	}
}
