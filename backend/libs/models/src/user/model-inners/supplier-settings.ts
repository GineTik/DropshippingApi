import { prop } from '@typegoose/typegoose'

export class SupplierSettingsModel {
	@prop({ default: false })
	searchable: boolean

	@prop()
	publicName?: string

	@prop()
	apiName?: string

	@prop({ default: 'link' })
	ymlLoadType: 'link' | 'file'

	@prop()
	ymlLinkSettings?: {
		link: string
		refreshTime: '5m' | '10m' | '30m' | '1h' | '3h' | '12h' | '1d'
	}

	@prop()
	description: string

	@prop()
	links: Array<{
		url: string
		name: string
	}>
}
