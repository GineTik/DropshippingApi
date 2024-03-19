import { YmlCatalog } from '../../types/yml.type'
import { YmlParseInterceptor } from './interface.interceptor'

export class IdInterceptor implements YmlParseInterceptor {
	parse(offer: any, ymlCatalog: YmlCatalog) {
		delete offer.id
		return offer
	}
}
