'use client'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import classNames from 'classnames'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RouteConstants from '../../../constants/RouteConstants'
import GoogleLogo from '../../../public/GoogleLogo.webp'
import { AuthDto } from '../../dtos/user/auth.dto'
import { SuccessAuthDto } from '../../dtos/user/success-auth.dto'
import BlueButton from '../Common/Button/BlueButton'
import BorderedButton from '../Common/Button/BorderedButton'
import H4 from '../Common/Headings/H4'
import Section from '../Common/Section/Section'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import HrWithText from './Hr/Hr'
import Input from './Input/Input'

interface AuthPageProps {
	type: 'login' | 'registration'
}

const AuthPage = ({ type }: AuthPageProps) => {
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
	const [errorMessage, setErrorMessage] = useState<string>()

	const { mutateAsync: authAsync, isPending } = useMutation<
		AxiosResponse<SuccessAuthDto>,
		AxiosError<{ message: string[] }>
	>({
		mutationKey: ['auth'],
		mutationFn: () =>
			isLogin ? AuthService.login(data) : AuthService.registration(data),
		onError: (err) => {
			const messages = err.response?.data?.message
			if (messages && messages.length > 0) {
				if (typeof messages === 'string') setErrorMessage(messages)
				else setErrorMessage(messages[0])
			} else if (err.status === 400) {
				setErrorMessage('Невідома помилка, ми знаєм про неї та вирішуємо її')
			} else {
				setErrorMessage(
					'Невідома помилка на сервері, ми знаєм про неї та вирішуємо її'
				)
			}
		},
		onSuccess: ({ data }) => {
			login(data)
		}
	})

	const handleSubmit = () => {
		if (!isLogin && data.password !== data.confirmPassword) {
			setErrorMessage(
				'Пароль не співпадає з паролем у полі "Підтвердіть пароль"'
			)
			return
		}

		setErrorMessage(undefined)
		authAsync()
	}

	return (
		<Section className="flex justify-center items-center h-full">
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
					disabled={isPending}
				>
					{isPending ? (
						<Loader2 className="animate-spin" size={20} />
					) : isLogin ? (
						'Увійти'
					) : (
						'Зареєструватись'
					)}
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

				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
			</form>
		</Section>
	)
}

export default AuthPage
