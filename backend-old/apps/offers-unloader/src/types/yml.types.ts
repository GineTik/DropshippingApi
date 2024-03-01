export type YmlCatalog = {
	date: string
	shop: {
		name: string
		company: string
		url: string
		currencies: any[]
		categories: { category: any[] }
		offers: { offer: any[] }
	}
}

export type DropOfficeOffer = {
	id: number
	url: string

	name: string
	description: string
	available: boolean
	categoryId: string
	pictures: string[]
	parameters: any[]

	price: number

	currency: string
	pickup: boolean
	delivery: boolean

	vendorCode: string
	vendor: string

	keywords: string[]
	countryOfOrigin: string
}
