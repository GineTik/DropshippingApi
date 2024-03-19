import { YmlCatalog } from '../../types/yml.type'
import { YmlParseInterceptor } from './interface.interceptor'

export class KeywordsParseInterceptor implements YmlParseInterceptor {
	parse(offer: any, ymlCatalog: YmlCatalog) {
		if (offer.keywords) {
			offer.keywords = this.parseKeywords(offer.keywords)
		}
		delete offer.keywords

		return offer
	}

	private parseKeywords(keywords: string) {
		return keywords.split(',').map((k) => k.trim())
	}
}
