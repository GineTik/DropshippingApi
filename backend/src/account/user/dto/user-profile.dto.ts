import {
	DropshipperSettingsModel,
	SupplierSettingsModel,
	UserModel
} from '@app/models'
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
