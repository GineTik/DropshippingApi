'use client'
import ErrorMessage from '@/components/Authentication/ErrorMessage/ErrorMessage'
import StyledInput from '@/components/Authentication/Input/Input'
import BlueButton from '@/components/Common/Buttons/BlueButton'
import H5 from '@/components/Common/Headings/H5'
import Section from '@/components/Common/Section/Section'
import { AuthService } from '@/services/auth.service'
import { Tab } from '@headlessui/react'
import { useMutation } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useCallback, useState } from 'react'
import SettingsTab from './SettingsTab'

const SettingsPage = () => {
	const [newPassword, setNewPassword] = useState('')
	const [codeSended, setCodeSended] = useState(false)
	const [code, setCode] = useState('')

	const {
		mutateAsync: sendChangePasswordRequestAsync,
		error: sendRequestError,
		isPending: sendRequestIsPending
	} = useMutation<AxiosResponse, AxiosError<{ message: string }>>({
		mutationKey: ['change-password-request'],
		mutationFn: () => AuthService.sendChangePasswordRequest(),
		onSuccess: () => {
			setCodeSended(true)
		},
		onError: (err) => {
			console.log(err)
			setCodeSended(false)
		}
	})

	const {
		mutateAsync: confirmChangePassword,
		error: confirmChangePasswordError,
		isPending: confirmChangePasswordIsPending
	} = useMutation<AxiosResponse, AxiosError<{ message: string }>>({
		mutationKey: ['confirm-change-password'],
		mutationFn: () =>
			AuthService.confirmChangePassword({
				code: Number(code),
				newPassword
			}),
		onSuccess: () => {
			setCodeSended(false)
			setNewPassword('')
		},
		onError: (err) => {
			console.log(err)
		}
	})

	const changePassword = useCallback(() => {
		codeSended ? confirmChangePassword() : sendChangePasswordRequestAsync()
	}, [codeSended])

	return (
		<Section className="pt-7 sm:pt-14">
			<Tab.Group>
				<div className="flex md:gap-3 w-full max-w-[800px] mx-auto flex-col sm:flex-row">
					<Tab.List className="flex items-start flex-col w-full sm:w-52">
						<SettingsTab>Безпека</SettingsTab>
						<SettingsTab>Платіжні дані</SettingsTab>
					</Tab.List>
					<Tab.Panels className="px-3 sm:px-6 py-3">
						<Tab.Panel className="">
							<H5 className="w-full">Зміна паролю</H5>
							<div className="flex gap-4 mt-4">
								<div className="flex flex-col gap-3 text-sm max-sm:w-full">
									<StyledInput
										placeholder="Новий пароль"
										type="text"
										value={newPassword}
										onChange={(e) => setNewPassword(e.target.value)}
									/>
									{codeSended && (
										<StyledInput
											placeholder="Код підтвердження"
											type="number"
											value={code}
											onChange={(e) => setCode(e.target.value)}
										/>
									)}
									<BlueButton
										onClick={changePassword}
										isPending={
											sendRequestIsPending || confirmChangePasswordIsPending
										}
									>
										{codeSended ? 'Змінити пароль' : 'Відправити код'}
									</BlueButton>
									{sendRequestError && (
										<ErrorMessage>{sendRequestError}</ErrorMessage>
									)}
									{confirmChangePasswordError && (
										<ErrorMessage>{confirmChangePasswordError}</ErrorMessage>
									)}
								</div>
								<div className="text-gray-500 text-sm w-52 max-sm:hidden">
									Вам також треба підтвердити зміну паролю на почті.
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel>Content 2</Tab.Panel>
					</Tab.Panels>
				</div>
			</Tab.Group>
		</Section>
	)
}

export default SettingsPage
