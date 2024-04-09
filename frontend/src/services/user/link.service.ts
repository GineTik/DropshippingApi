import $api from '../api'

export const LinkService = {
	async add(dto: any) {
		return await $api.post('suppliers/links/add', { content: dto })
	},

	async update(dto: any) {
		return await $api.post('suppliers/links/update', { content: dto })
	},

	async delete(id: number) {
		return await $api.post('suppliers/links/remove', { content: id })
	},

	async getAll(supplierId: number) {
		return await $api.get(`suppliers/links/${supplierId}`)
	}
}
