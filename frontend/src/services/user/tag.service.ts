import { UpdateAllowedHostDto } from '@/dtos/user/allowed-hosts/update-allowed-host.dto'
import $api from '../api'

export const TagService = {
	async add(dto: any) {
		return await $api.post('suppliers/tags/add', { content: dto })
	},

	async update(dto: UpdateAllowedHostDto) {
		return await $api.post('suppliers/tags/update', { content: dto })
	},

	async delete(id: any) {
		return await $api.post('suppliers/tags/remove', { content: id })
	},

	async getAll(supplierId: number) {
		return await $api.get(`suppliers/tags/${supplierId}`)
	}
}
