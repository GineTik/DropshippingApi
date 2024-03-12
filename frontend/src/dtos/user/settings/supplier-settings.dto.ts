export type SupplierSettings = {
	publicName: string
	apiName: string
	description: string
	ymlType: 'file' | 'link'
	ymlCatalogLink: {
		url: string
		refreshTime: string
	}
}
