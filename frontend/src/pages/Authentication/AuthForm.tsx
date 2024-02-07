'use client'
import BlueButton from '@/components/Buttons/BlueButton'
import BorderedButton from '@/components/Buttons/BorderedButton'
import H4 from '@/components/Headings/H4'
import { SuccessAuthDto } from '@/dtos/user/success-auth.dto'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RouteConstants from '../../../constants/RouteConstants'
import GoogleLogo from '../../../public/GoogleLogo.webp'
import { AuthDto } from '../../dtos/user/auth.dto'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import HrWithText from './Hr/HtWithText'
import Input from './Input/Input'

interface AuthFormProps {
	type: 'login' | 'registration'
}

const AuthForm = ({ type }: AuthFormProps) => {
	const { login } = useActions()

	const isLogin = type === 'login'

	const [data, setData] = useState<
		AuthDto & {
			confirmPassword: string
		}
	>({
		email: '',
		password: '',
		confirmPassword: ''
	})
	const [error, setError] = useState<AxiosError<any> | string>()

	const { mutateAsync: authAsync, isPending } = useMutation<
		AxiosResponse<SuccessAuthDto>,
		AxiosError<{ message: string[] }>
	>({
		mutationKey: ['auth'],
		mutationFn: () =>
			isLogin ? AuthService.login(data) : AuthService.registration(data),
		onError: (err) => {
			setError(err)
		},
		onSuccess: ({ data }) => {
			login(data)
		}
	})

	const handleSubmit = () => {
		if (!isLogin && data.password !== data.confirmPassword) {
			setError('Пароль не співпадає з паролем у полі "Підтвердіть пароль"')
			return
		}

		setError(undefined)
		authAsync()
	}

	return (
		<form action="" className="flex flex-col gap-3 w-72 text-sm">
			<H4 className="ml-4">{isLogin ? 'Вхід' : 'Реєстрація'}</H4>
			<Input
				placeholder="Почта"
				type="email"
				value={data.email}
				onChange={(e) => setData({ ...data, email: e.target.value })}
			/>
			<Input
				placeholder="Пароль"
				type="text"
				value={data.password}
				onChange={(e) => setData({ ...data, password: e.target.value })}
			/>
			{!isLogin && (
				<Input
					placeholder="Підтвердіть пароль"
					type="text"
					value={data.confirmPassword}
					onChange={(e) =>
						setData({ ...data, confirmPassword: e.target.value })
					}
				/>
			)}
			<BlueButton
				className={classNames('flex relative', {
					'justify-center': isPending
				})}
				onClick={handleSubmit}
				isPending={isPending}
			>
				{isLogin ? 'Увійти' : 'Зареєструватись'}
			</BlueButton>

			<HrWithText />

			<BorderedButton>
				<Image src={GoogleLogo.src} alt="GoogleLogo" width={20} height={20} />
				<span className="ml-3">Google</span>
			</BorderedButton>
			{isLogin ? (
				<Link href={RouteConstants.Registration} className="text-gray-400">
					Ще не маю <span className="text-blue-500">акаунту</span>!
				</Link>
			) : (
				<Link href={RouteConstants.Login} className="text-gray-400">
					Вже маю <span className="text-blue-500">акаунт</span>!
				</Link>
			)}

			{error && <ErrorMessage>{error}</ErrorMessage>}
		</form>
	)
}

export default AuthForm
