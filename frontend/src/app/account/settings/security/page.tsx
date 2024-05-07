'use client'

import { Inputs } from '@/components/inputs'
import { AuthService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { title } from 'process'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Setting from "../../components/settings/Setting"

const SettingsSecurity = () => {
    const [data, setData] = useState({
        code: '',
        password: ''
    })

	const [codeSended, setCodeSended] = useState(false)

	const {
		mutateAsync: sendChangePasswordRequest
	} = useMutation<AxiosResponse, AxiosError<{ message: string }>>({
		mutationKey: [`change-${title}`],
		mutationFn: (v) => AuthService.sendChangePasswordRequest(),
		onSuccess: () => {
			setCodeSended(true)
			toast.success('Код відправлений на почту')
		},
		onError: (err) => {
			setCodeSended(false)
			toast.error('Помилка при відправленні коду')
		}
	})

	return (
		<div>
			<Setting title='Зміна паролю' buttonText='Змінити' inDeveloping>
				<Inputs.Default 
					onChange={(e) => setData({ ...data, password: e.target.value})} 
					placeholder='Новий пароль' 
					value={data.password}
				/>
			</Setting>
		</div>
	)
}

export default SettingsSecurity
