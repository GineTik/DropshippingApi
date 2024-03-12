import $api from '../api'

export const SupplierService = {
	async changeSettings(dto: any) {
		return await $api.post('supplier/change-settings', dto)
	},

	async changePublicName(name: string) {
		return await $api.post('supplier/change-public-name', { content: name })
	},

	async changeApiName(name: string) {
		return await $api.post('supplier/change-api-name', { content: name })
	},

	async changeDescription(description: string) {
		return await $api.post('supplier/change-description', {
			content: description
		})
	},

	async changeYmlType(type: string) {
		return await $api.post('supplier/change-yml-type', { content: type })
	},

	async changeYmlCatalogLink(link: any) {
		return await $api.post('supplier/change-yml-catalog-link', link)
	},

	async addLink(dto: any) {
		return await $api.post('supplier/add=link', dto)
	},

	async removeLink(link: string) {
		return await $api.post('supplier/remove-link', { content: link })
	}
}
