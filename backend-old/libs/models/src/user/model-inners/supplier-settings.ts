import { prop } from '@typegoose/typegoose'
import { WebsiteLink } from './supplier-link'
import { YmlCatalogLink } from './yml-link'

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
	ymlLinkSettings?: YmlCatalogLink

	@prop()
	description: string

	@prop()
	links: Array<WebsiteLink>

	@prop()
	offersUpdatedAt: Date
}
