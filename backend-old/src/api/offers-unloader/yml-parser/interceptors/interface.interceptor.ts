import { YmlCatalog } from '../../types/yml.type'

export interface YmlParseInterceptor {
	parse(offer: any, ymlCatalog: YmlCatalog)
}
