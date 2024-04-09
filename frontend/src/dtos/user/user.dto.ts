import { SupplierSettings } from './settings/supplier-settings.dto'

export type User = {
	id: string
	email: string
	emailIsConfirmed: boolean
	roles: string[]
	supplierSettings: SupplierSettings
	dropshipperSettings: {}
}
