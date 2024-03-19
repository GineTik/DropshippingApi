import { prop } from '@typegoose/typegoose'
import { AllowedHostModel } from '../allowed-host.model'
import { ApiKeyModel } from '../api-key.model'

export class DropshipperSettingsModel {
	@prop({ default: [] })
	apiKeys: ApiKeyModel[]

	@prop({ default: [] })
	allowedHosts: AllowedHostModel[]

	@prop({ default: 10 })
	limitOfApiKeysAndHosts: number
}
