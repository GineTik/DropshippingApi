import { SuccessAuthDto } from "@/dtos/user/success-auth.dto";
import { User } from "@/dtos/user/user.dto";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: undefined as unknown as User,
        accessToken: undefined as unknown as string
    } as SuccessAuthDto,
    reducers: {
        activateAccount: (state) => {
            state.user.isActivated = true
        },
        login: (state, {payload}: {payload: SuccessAuthDto}) => {
            state.user = payload.user
            state.accessToken = payload.accessToken
        },
        logout: (state) => {
            state.user = undefined as unknown as User
            state.accessToken = undefined as unknown as string
        }
    }
})