import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import { authSlice } from "./auth/auth.slice";

const persistConfig = {
    key: 'root',
    storage,
}

const authPersistConfig = {
    key: 'auth',
    storage: storage
}  

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authSlice.reducer),
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)

export type StateType = ReturnType<typeof store.getState>
export const getState = (state: StateType) => {
    return state
}