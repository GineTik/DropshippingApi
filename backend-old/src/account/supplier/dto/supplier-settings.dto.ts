import { WebsiteLink } from '@app/models'
import { YmlCatalogLink } from '../../../../libs/models/src/user/model-inners/yml-link'

export class SupplierSettingsDto {
	publicName?: string
	apiName?: string
	ymlLoadType: 'link' | 'file'
	ymlLinkSettings?: YmlCatalogLink
	description: string
	links: Array<WebsiteLink>
}
