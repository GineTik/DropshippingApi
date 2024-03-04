import { AvailableUserType } from '@app/types'
import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { AllowedHostModel } from './allowed-host.model'
import { ApiKeyModel } from './api-key.model'

export class DropshipperSettingsModel {
	@prop({ default: [] })
	apiKeys: ApiKeyModel[]

	@prop({ default: [] })
	allowedHosts: AllowedHostModel[]

	@prop({ default: 10 })
	limitOfApiKeysAndHosts: number
}

export class SupplierSettingsModel {
	@prop({ default: false })
	searchable: boolean

	@prop({ required: false })
	publicName?: string

	@prop({ required: false })
	apiName?: string

	@prop({ default: 'link' })
	ymlLoadType: 'link' | 'file'

	@prop()
	ymlLinkSettings?: {
		link: string
		refreshTime: '5m' | '10m' | '30m' | '1h' | '3h' | '12h' | '1d'
	}
}

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
	@prop({ unique: true, required: true })
	email: string

	@prop({ required: true })
	password: string

	@prop({ default: false })
	emailConfirmed: boolean

	@prop()
	activationCode: number

	@prop({ required: true })
	type: AvailableUserType

	@prop()
	dropshipperSettings?: DropshipperSettingsModel

	@prop()
	supplierSettings?: SupplierSettingsModel
}
