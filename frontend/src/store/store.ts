import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/es/storage'
import { authSlice } from './auth/auth.slice'
import { supplierSlice } from './supplier/supplier.slice'

const persistConfig = {
	key: 'root',
	storage
}

const authPersistConfig = {
	key: 'auth',
	storage
}

const supplierPersistConfig = {
	key: 'supplier',
	storage
}

const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authSlice.reducer),
	supplier: persistReducer(supplierPersistConfig, supplierSlice.reducer)
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)

export type StateType = ReturnType<typeof store.getState>
export const getState = (state: StateType) => {
	return state
}
