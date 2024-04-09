import { authSlice } from '@/store/auth/auth.slice'
import { toastsSlice } from '@/store/toasts/toasts.slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(
		() =>
			bindActionCreators(
				{
					...authSlice.actions,
					...toastsSlice.actions
				},
				dispatch
			),
		[dispatch]
	)
}
