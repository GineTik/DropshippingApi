import { YmlCatalog } from '../../types/yml.type'
import { YmlParseInterceptor } from './interface.interceptor'

export class TypeInterceptor implements YmlParseInterceptor {
	parse(offer: any, ymlCatalog: YmlCatalog) {
		this.convertToRightType(offer)
	}

	private convertToRightType(object: any) {
		Object.keys(object).forEach((key) => {
			const value = object[key]

			const number = Number(value)
			if (Number.isNaN(number) === false) {
				object[key] = number
			} else if (value === 'true' || value === 'false') {
				object[key] = Boolean(value)
			}

			return object
		})
	}
}
