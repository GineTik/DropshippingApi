export type SupplierSettings = {
	id: number
	publicName: string
	apiName: string
	description: string
	ymlLoadType: string
	ymlLink: string
	refreshTimeId: number
	offersUpdatedAtUtc: Date
	searchable: boolean
	links: Array<{ name: string; url: string }>
	tags: Array<{ name: string }>
}
