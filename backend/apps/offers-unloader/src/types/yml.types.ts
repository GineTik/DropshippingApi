export type YmlCatalog = {
	date: string
	shop: {
		name: string
		company: string
		url: string
		currencies: any[]
		categories: any[]
		offers: { offer: any[] }
	}
}
