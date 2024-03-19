import { UserModel } from '@app/models'
import { DropshipperSettingsModel } from '@app/models/user/model-inners/dropshipper-settings'
import { SupplierSettingsModel } from '@app/models/user/model-inners/supplier-settings'
import { AvailableUserType } from '@app/types'
import { Types } from 'mongoose'

export class UserProfileDto {
	id: Types.ObjectId
	email: string
	isActivated: boolean
	type: AvailableUserType
	dropshippingSettings?: DropshipperSettingsModel
	supplierSettings?: SupplierSettingsModel

	constructor(userModel: UserModel) {
		this.id = userModel._id
		this.email = userModel.email
		this.isActivated = userModel.emailConfirmed
		this.type = userModel.type
		this.dropshippingSettings = userModel.dropshipperSettings
		this.supplierSettings = userModel.supplierSettings
	}
}
