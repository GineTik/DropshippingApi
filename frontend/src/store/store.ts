import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth.api";
import { authSlice } from "./auth/auth.slice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(authApi.middleware),
})

export type StateType = ReturnType<typeof store.getState>
export const getState = (state: StateType) => {
    return state
}