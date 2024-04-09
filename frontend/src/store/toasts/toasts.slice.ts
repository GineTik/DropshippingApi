import { ToastItemProps } from '@/components/toast/ToastItem'
import { createSlice } from '@reduxjs/toolkit'

export const toastsSlice = createSlice({
	name: 'toasts',
	initialState: {
		items: [] as Array<ToastItemProps>
	},
	reducers: {
		addToast: (state, { payload }: { payload: ToastItemProps }) => {
			if (state.items == null) state.items = []
			state.items.push({
				id: crypto.randomUUID(),
				...payload
			})
		},
		clearToasts: (state) => {
			state.items = []
			console.log(state.items)
		},
		removeToast: (state, { payload }: { payload: ToastItemProps }) => {
			const index = state.items.findIndex((o) => o.id == payload.id)
			state.items = [
				...state.items.slice(0, index),
				...state.items.slice(index + 1)
			]
		}
	}
})
