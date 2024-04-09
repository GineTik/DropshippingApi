import $api from '../api'

export const OffersService = {
	async getFirst(supplierId: number) {
		return await $api.get(`suppliers/offers/first/${supplierId}`)
	},

	async getCount(supplierId: number) {
		return await $api.get(`suppliers/offers/count/${supplierId}`)
	}
}
