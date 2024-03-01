import { OfferModel } from '@app/models/offers'
import { Injectable } from '@nestjs/common'
import { YmlCatalog } from '../types/yml.types'
import {
	CategoryParseInterceptor,
	KeywordsParseInterceptor,
	ParametersParseInterceptor,
	TypeInterceptor,
	YmlParseInterceptor
} from './interceptors'
import { ToCamelCaseInterceptor } from './interceptors/to-camel-case.interceptor'

@Injectable()
export class YmlCatalogParser {
	private interceptors: YmlParseInterceptor[] = [
		new CategoryParseInterceptor(),
		new ParametersParseInterceptor(),
		new KeywordsParseInterceptor(),
		new ToCamelCaseInterceptor(),
		new TypeInterceptor()
	]

	parse(ymlCatalog: YmlCatalog): OfferModel[] {
		const parsedOffers: OfferModel[] = []
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
