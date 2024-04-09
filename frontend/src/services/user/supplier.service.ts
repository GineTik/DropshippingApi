import $api from '../api'

export const SupplierService = {
	async getSuppliersPage(page: number) {
		return await $api.get(`suppliers?page=${page}`)
	},

	async getSupplier(id: number) {
		return await $api.get(`suppliers/${id}`)
	},

	async changePublicName(name: string) {
		return await $api.post('user/supplier/change-public-name', {
			content: name
		})
	},

	async changeApiName(name: string) {
		return await $api.post('user/supplier/change-api-name', { content: name })
	},

	async changeDescription(description: string) {
		return await $api.post('user/supplier/change-description', {
			content: description
		})
	},

	async changeYmlType(type: string) {
		return await $api.post('user/supplier/change-yml-type', { content: type })
	},

	async changeYmlCatalogLink(link: any) {
		return await $api.post('user/supplier/change-yml-catalog-link', link)
	},

	async addLink(dto: any) {
		return await $api.post('user/supplier/add=link', dto)
	},

	async removeLink(link: string) {
		return await $api.post('user/supplier/remove-link', { content: link })
	},

	async getAvailableRefreshTimes() {
		return await $api.get('user/supplier/available-refresh-times')
	},

	async getAvailableYmlLoadTypes() {
		return await $api.get('user/supplier/available-yml-load-types')
	}
}
