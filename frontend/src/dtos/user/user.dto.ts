import { SupplierSettings } from './settings/supplier-settings.dto'

export type User = {
	id: string
	email: string
	isActivated: boolean
	type: string
	supplierSettings: SupplierSettings
	dropshipperSettings: {}
}
