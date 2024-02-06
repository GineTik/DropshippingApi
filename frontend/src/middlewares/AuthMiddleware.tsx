'use client'
import { SuccessAuthDto } from '@/dtos/user/success-auth.dto'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useEffect } from 'react'
import LocalStorageConstants from '../../constants/LocalStorageConstants'

interface AuthMiddlewareProps {
	children: any
}

const AuthMiddleware = ({ children }: AuthMiddlewareProps) => {
	const { login } = useActions()

	const { mutateAsync: refresh } = useMutation<AxiosResponse<SuccessAuthDto>>({
		mutationKey: ['refresh'],
		mutationFn: () => AuthService.refresh(),
		onSuccess: (result) => {
			login(result.data)
		},
		onError: (err) => {
			console.log(err)
		}
	})

	useEffect(() => {
		if (localStorage.getItem(LocalStorageConstants.AccessToken)) {
			refresh()
		}
	}, [])

	return children
}

export default AuthMiddleware
