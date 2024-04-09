import { SuccessAuthDto } from '@/dtos/user/success-auth.dto'
import { User } from '@/dtos/user/user.dto'
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: undefined as unknown as User,
		accessToken: undefined as unknown as string
	} as SuccessAuthDto,
	reducers: {
		activateAccount: (state) => {
			state.user.emailIsConfirmed = true
		},
		login: (state, { payload }: { payload: SuccessAuthDto }) => {
			state.user = payload.user
			state.accessToken = payload.accessToken
		},
		logout: (state) => {
			state.user = undefined as unknown as User
			state.accessToken = undefined as unknown as string
		},
		changePublicName: (state, { payload }: { payload: string }) => {
			state.user.supplierSettings.publicName = payload
		},
		changeApiNameName: (state, { payload }: { payload: string }) => {
			state.user.supplierSettings.apiName = payload
		},
		changeDescription: (state, { payload }: { payload: string }) => {
			state.user.supplierSettings.description = payload
		},
		changeYmlType: (state, { payload }: { payload: string }) => {
			state.user.supplierSettings.ymlLoadType = payload
		},
		changeYmlCatalogUrl: (state, { payload }: { payload: string }) => {
			state.user.supplierSettings.ymlLink = payload
		},
		changeYmlCatalogRefreshTime: (state, { payload }: { payload: number }) => {
			state.user.supplierSettings.refreshTimeId = payload
		}
	}
})
