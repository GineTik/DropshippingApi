import { SupplierSettings } from '@/dtos/user/settings/supplier-settings.dto'
import { createSlice } from '@reduxjs/toolkit'

export const supplierSlice = createSlice({
	name: 'supplier',
	initialState: <SupplierSettings>{},
	reducers: {
		// changePublicName: (state, { payload }: { payload: string }) => {
		// 	state.publicName = payload
		// },
		// changeApiNameName: (state, { payload }: { payload: string }) => {
		// 	state.apiName = payload
		// },
		// changeDescription: (state, { payload }: { payload: string }) => {
		// 	state.description = payload
		// },
		// changeYmlType: (state, { payload }: { payload: string }) => {
		// 	state.ymlLoadType = payload
		// },
		// changeYmlCatalogUrl: (state, { payload }: { payload: string }) => {
		// 	state.ymlLink = payload
		// },
		// changeYmlCatalogRefreshTime: (state, { payload }: { payload: number }) => {
		// 	state.refreshTimeId = payload
		// }
	}
})
