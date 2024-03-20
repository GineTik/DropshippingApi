import { CreateApiKeyDto } from '@/dtos/user/api-key/create-api-key.dto'
import { UpdateApiKeyDto } from '@/dtos/user/api-key/update-api-key.dto'
import $api from '../api'

export const ApiKeysService = {
	async getAll() {
		return await $api.get('user/api-keys')
	},

	async create(dto: CreateApiKeyDto) {
		return await $api.post('user/api-keys/create', dto)
	},

	async update(dto: UpdateApiKeyDto) {
		return await $api.post('user/api-keys/update', dto)
	},

	async refresh(apiKey: string) {
		return await $api.post('user/api-keys/refresh', {
			key: apiKey
		})
	},

	async delete(apiKey: string) {
		return await $api.post('user/api-keys/delete', {
			key: apiKey
		})
	}
}
