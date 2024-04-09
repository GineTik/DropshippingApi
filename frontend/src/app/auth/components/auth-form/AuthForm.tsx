'use client'
import { Buttons } from '@/components/buttons'
import { Inputs } from '@/components/inputs'
import { SuccessAuthDto } from '@/dtos/user/success-auth.dto'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import classNames from 'classnames'
import { OctagonXIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import RouteConstants from '../../../../../constants/RouteConstants'
import { AuthDto } from '../../../../dtos/user/auth.dto'
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
			toast.error(err.response?.data.message, {
				icon: <OctagonXIcon className='text-red-500' />
			})
		},
		onSuccess: ({ data }) => {
			login(data)
		}
	})

	const handleSubmit = () => {
		if (!isLogin && data.password !== data.confirmPassword) {
			toast.error('Пароль не співпадає з паролем у полі "Підтвердіть пароль"', {
				icon: <OctagonXIcon className='text-red-500' />
			})
			return
		}

		authAsync()
	}

	return (
		<form action="" className="flex flex-col gap-3 text-sm text-white w-[280px]">
			<h4 className=''>{isLogin ? 'Вхід' : 'Реєстрація'}</h4>
			<Inputs.Default
				placeholder="Почта"
				type="email"
				value={data.email}
				onChange={(e) => setData({ ...data, email: e.target.value })}
			/>
			<Inputs.Default
				placeholder="Пароль"
				type="text"
				value={data.password}
				onChange={(e) => setData({ ...data, password: e.target.value })}
			/>
			
			{!isLogin && (
				<>
					<Inputs.Default
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
							<Inputs.Default
								placeholder="Публічне ім'я"
								type="text"
								value={data.publicName}
								onChange={(e) =>
									setData({ ...data, publicName: e.target.value })
								}
							/>
							<Inputs.Default
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
			<Buttons.Form
				className={classNames('flex relative', {
					'justify-center': isPending
				})}
				onClick={handleSubmit}
			>
				{isLogin ? 'Увійти' : 'Зареєструватись'}
			</Buttons.Form>

			{isLogin ? (
				<Link href={RouteConstants.Registration} className="text-gray-400">
					Ще не маю <span className="text-blue-500">акаунту</span>!
				</Link>
			) : (
				<Link href={RouteConstants.Login} className="text-gray-400">
					Вже маю <span className="text-blue-500">акаунт</span>!
				</Link>
			)}
		</form>
	)
}

export default AuthForm
