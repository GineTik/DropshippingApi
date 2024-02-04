import { User } from "@/dtos/user/user.dto";
import { createSlice } from "@reduxjs/toolkit";
import LocalStorageConstants from "../../../constants/LocalStorageConstants";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: undefined as unknown as User,
        loggedIn: false,
        isLoadingProfile: false
    },
    reducers: {
        startLoadingProfile: (state) => {
            state.isLoadingProfile = true
        },
        login: (state, {payload}: {payload: { user: User, accessToken: string }}) => {
            state.user = payload.user
            state.loggedIn = true
            state.isLoadingProfile = false
            localStorage.setItem(LocalStorageConstants.AccessToken, payload.accessToken)
        },
        logout: (state) => {
            state.user = {} as User
            state.loggedIn = false
            state.isLoadingProfile = false
            localStorage.removeItem(LocalStorageConstants.AccessToken)
        }
    }
})