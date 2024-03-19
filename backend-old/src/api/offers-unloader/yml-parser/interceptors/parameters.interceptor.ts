import { ParameterModel } from '../../types/parameter.model'
import { YmlCatalog } from '../../types/yml.type'
import { YmlParseInterceptor } from './interface.interceptor'

export class ParametersParseInterceptor implements YmlParseInterceptor {
	parse(offer: any, ymlCatalog: YmlCatalog) {
		if (offer.param) {
			offer.parameters = this.parseParameters(offer.param)
		}
		delete offer.param

		return offer
	}

	private parseParameters(parameters: any[]) {
		return parameters.map(
			(p) =>
				({
					name: p.name,
					unit: p.unit,
					value: p._
				}) as ParameterModel
		)
	}
}
