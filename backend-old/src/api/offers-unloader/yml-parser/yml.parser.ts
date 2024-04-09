import { Injectable } from '@nestjs/common'
import { OfferDataModel } from '../types/offer.model'
import { YmlCatalog } from '../types/yml.type'
import {
	CategoryParseInterceptor,
	KeywordsParseInterceptor,
	ParametersParseInterceptor,
	TypeInterceptor,
	YmlParseInterceptor
} from './interceptors'
import { IdInterceptor } from './interceptors/id.interceptor'
import { SizesParseInterceptor } from './interceptors/sizes.interceptor'
import { ToCamelCaseInterceptor } from './interceptors/to-camel-case.interceptor'

@Injectable()
export class YmlCatalogParser {
	private interceptors: YmlParseInterceptor[] = [
		new IdInterceptor(),
		new CategoryParseInterceptor(),
		new ParametersParseInterceptor(),
		new KeywordsParseInterceptor(),
		new ToCamelCaseInterceptor(),
		new TypeInterceptor(),
		new SizesParseInterceptor()
	]

	parse(ymlCatalog: YmlCatalog) {
		const parsedOffers: OfferDataModel[] = []
		const offersFromCatalog = ymlCatalog.shop.offers.offer

		offersFromCatalog.forEach((offer) => {
			this.interceptors.forEach((i) => {
				const result = i.parse(offer, ymlCatalog)
				offer = {
					...offer,
					...result
				}
			})

			parsedOffers.push(offer)
		})

		return parsedOffers
	}
}
