import { CategoryModel } from './category.model'
import { ParameterModel } from './parameter.model'

export type OfferModel = Record<string, any> & {
	id: number
	url: string

	name: string
	description: string
	available: boolean
	category: CategoryModel
	pictures: string[]
	parameters: ParameterModel[]

	price: number
	oldPrice: string | undefined

	currency: string
	pickup: boolean
	delivery: boolean

	vendorCode: string
	vendor: string
}
