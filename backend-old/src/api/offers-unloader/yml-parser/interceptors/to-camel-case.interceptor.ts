import { YmlCatalog } from '../../types/yml.type'
import { YmlParseInterceptor } from './interface.interceptor'

export class ToCamelCaseInterceptor implements YmlParseInterceptor {
	parse(offer: any, ymlCatalog: YmlCatalog) {
		const result = {}

		Object.keys(offer).forEach((key) => {
			result[this.snakeToCamel(key)] = offer[key]
			delete offer[key]
		})

		return result
	}

	private snakeToCamel(str: string) {
		return str.replace(/([-_][a-z])/g, (group) =>
			group.toUpperCase().replace('-', '').replace('_', '')
		)
	}
}
