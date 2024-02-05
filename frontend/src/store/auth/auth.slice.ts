import { SuccessAuthDto } from "@/dtos/user/success-auth.dto";
import { User } from "@/dtos/user/user.dto";
import { createSlice } from "@reduxjs/toolkit";
import LocalStorageConstants from "../../../constants/LocalStorageConstants";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: undefined as unknown as User,
        isLoadingProfile: false,
        accessToken: undefined as unknown as string
    } as SuccessAuthDto & { isLoadingProfile: boolean },
    reducers: {
        activateAccount: (state) => {
            state.user.isActivated = true
        },
        startLoadingProfile: (state) => {
            state.isLoadingProfile = true
        },
        endLoadingProfile: (state) => {
            state.isLoadingProfile = false
        },
        login: (state, {payload}: {payload: SuccessAuthDto}) => {
            state.user = payload.user
            state.accessToken = payload.accessToken
            state.isLoadingProfile = false
            localStorage.setItem(LocalStorageConstants.AccessToken, payload.accessToken)
        },
        logout: (state) => {
            state.user = undefined as unknown as User
            state.accessToken = undefined as unknown as string
            state.isLoadingProfile = false
            localStorage.removeItem(LocalStorageConstants.AccessToken)
        }
    }
})