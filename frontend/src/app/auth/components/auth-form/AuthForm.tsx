'use client'
import GoogleLogo from '@/../public/GoogleLogo.webp'
import BlueButton from '@/components/buttons/old-buttons/BlueButton'
import BorderedButton from '@/components/buttons/old-buttons/BorderedButton'
import Input from '@/components/inputs/Input'
import { SuccessAuthDto } from '@/dtos/user/success-auth.dto'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RouteConstants from '../../../../../constants/RouteConstants'
import ErrorMessage from '../../../../components/error-message/ErrorMessage'
import { AuthDto } from '../../../../dtos/user/auth.dto'
import HrWithText from '../OrHr'
import styles from './AuthForm.module.scss'

interface AuthFormProps {
	type: 'login' | 'registration'
}

const AuthForm = ({ type }: AuthFormProps) => {
	const { login, changeApiNameName } = useActions()

	const isLogin = type === 'login'

	const [userType, setUserType] = useState<'dropshipper' | 'supplier'>('dropshipper')
	const [data, setData] = useState<
		AuthDto & {
			confirmPassword: string
			publicName: string
			apiName: string
		}
	>({
		email: '',
		password: '',
		confirmPassword: '',
		publicName: '',
		apiName: ''
	})
	const [error, setError] = useState<AxiosError<any> | string>()

	const { mutateAsync: authAsync, isPending } = useMutation<
		AxiosResponse<SuccessAuthDto>,
		AxiosError<{ message: string[] }>
	>({
		mutationKey: ['auth'],
		mutationFn: () => {
			if (isLogin) {
				return AuthService.login(data)
			} else { 
				return userType === 'dropshipper' 
					? AuthService.registrationDropshipper(data) 
					: AuthService.registrationSupplier(data)
			}
		},
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
			<h4 className="ml-4">{isLogin ? 'Вхід' : 'Реєстрація'}</h4>
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
				<>
					<Input
						placeholder="Підтвердіть пароль"
						type="text"
						value={data.confirmPassword}
						onChange={(e) =>
							setData({ ...data, confirmPassword: e.target.value })
						}
					/>
					<div className={styles.user_types}>
						<div className={styles.user_type_item} onClick={(e) => setUserType('dropshipper')}>
							<input id='user-type-dropshipper' name='user-type' type="radio" checked={userType === 'dropshipper'} />
							<label htmlFor="user-type-dropshipper">дропшипер</label>
						</div>
						<div className={styles.user_type_item} onClick={(e) => setUserType('supplier')}>
							<input id='user-type-supplier' name='user-type' type="radio" checked={userType === 'supplier'} />
							<label htmlFor="user-type-supplier">поставщик</label>
						</div>
					</div>
					{userType === 'supplier' && (
						<>
							<Input
								placeholder="Публічне ім'я"
								type="text"
								value={data.publicName}
								onChange={(e) =>
									setData({ ...data, publicName: e.target.value })
								}
							/>
							<Input
								placeholder="Ім'я для апі"
								type="text"
								value={data.apiName}
								onChange={(e) =>
									setData({ ...data, apiName: e.target.value })
								}
							/>
						</>
					)}
				</>
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
