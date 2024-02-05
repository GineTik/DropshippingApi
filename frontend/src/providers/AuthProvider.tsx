'use client'
import { SuccessAuthDto } from '@/dtos/user/success-auth.dto'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useEffect } from 'react'
import LocalStorageConstants from '../../constants/LocalStorageConstants'

interface AuthProviderProps {
	children: any
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	const { login, startLoadingProfile, endLoadingProfile } = useActions()

	const { mutateAsync: refresh } = useMutation<AxiosResponse<SuccessAuthDto>>({
		mutationKey: ['refresh'],
		mutationFn: () => AuthService.refresh(),
		onSuccess: (result) => {
			login(result.data)
			endLoadingProfile()
		},
		onError: (err) => {
			console.log(err)
			endLoadingProfile()
		}
	})

	useEffect(() => {
		if (localStorage.getItem(LocalStorageConstants.AccessToken)) {
			startLoadingProfile()
			refresh()
		}
	}, [])

	return children
}

export default AuthProvider
