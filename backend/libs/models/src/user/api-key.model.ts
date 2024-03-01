// import { ApiKeyDto } from '../../../dto/src/user/api-keys/api-key.dto'
// import { UpdateApiKeyDto } from '../../../dto/src/user/api-keys/update-api-key.dto'

export class ApiKeyModel {
	key: string
	name: string
	description: string

	// static fromDto = (dto: ApiKeyDto) => ({
	// 	...dto,
	// 	key: crypto.randomUUID()
	// })

	// static fromUpdateDto = (dto: UpdateApiKeyDto) => ({
	// 	...dto
	// })
}
