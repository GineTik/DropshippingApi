'use client'
import { SuccessAuthDto } from '@/dtos/user/success-auth.dto'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { StateType } from '@/store/store'
import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

interface RefreshTokensMiddlewareProps {
	children: any
}

const RefreshTokensMiddleware = ({
	children
}: RefreshTokensMiddlewareProps) => {
	const { accessToken } = useSelector((state: StateType) => state.auth)
	const { login, logout } = useActions()

	const { mutateAsync: refresh } = useMutation<AxiosResponse<SuccessAuthDto>>({
		mutationKey: ['refresh'],
		mutationFn: () => AuthService.refresh(),
		onSuccess: (result) => {
			login(result.data)
		},
		onError: (err) => {
			console.log(err)
			logout()
		}
	})

	useEffect(() => {
		if (accessToken) {
			refresh()
		}
	}, [])

	return children
}

export default RefreshTokensMiddleware
