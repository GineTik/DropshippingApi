import { AddAllowedHostDto } from '@/dtos/user/allowed-hosts/add-allowed-host.dto'
import { UpdateAllowedHostDto } from '@/dtos/user/allowed-hosts/update-allowed-host.dto'
import $api from '../api'

export const LinkService = {
	async add(dto: AddAllowedHostDto) {
		return await $api.post('suppliers/links/add', { content: dto })
	},

	async update(dto: UpdateAllowedHostDto) {
		return await $api.post('suppliers/links/update', { content: dto })
	},

	async delete(id: number) {
		return await $api.post('suppliers/links/remove', { content: id })
	},

	async getAll(supplierId: number) {
		return await $api.get(`suppliers/links/${supplierId}`)
	}
}
