import { YmlCatalog } from '../../types/yml.types'

export interface YmlParseInterceptor {
	parse(offer: any, ymlCatalog: YmlCatalog)
}
