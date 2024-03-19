import { AvailableUserType } from '@app/types'
import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { DropshipperSettingsModel } from './model-inners/dropshipper-settings'
import { SupplierSettingsModel } from './model-inners/supplier-settings'

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
