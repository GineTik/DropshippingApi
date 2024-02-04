import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export type StateType = ReturnType<typeof store.getState>