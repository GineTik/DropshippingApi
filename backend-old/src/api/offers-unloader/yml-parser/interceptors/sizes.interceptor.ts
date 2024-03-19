import { YmlCatalog } from '../../types/yml.type'
import { YmlParseInterceptor } from './interface.interceptor'

export class SizesParseInterceptor implements YmlParseInterceptor {
	parse(offer: any, ymlCatalog: YmlCatalog) {
		if (offer.sizes) {
			offer.sizes = this.parseSizes(offer.sizes.size)
		}

		return offer
	}

	private parseSizes(sizes: any) {
		if (Array.isArray(sizes) === false) {
			return {
				name: sizes.name,
				value: Number(sizes._)
			}
		}

		return sizes.map((s) => ({
			name: s.name,
			value: Number(s._)
		}))
	}
}
