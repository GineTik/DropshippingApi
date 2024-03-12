import { prop } from '@typegoose/typegoose'

export class YmlCatalogLink {
	@prop()
	link: string

	@prop()
	refreshTime: '5m' | '10m' | '30m' | '1h' | '3h' | '12h' | '1d'
}
