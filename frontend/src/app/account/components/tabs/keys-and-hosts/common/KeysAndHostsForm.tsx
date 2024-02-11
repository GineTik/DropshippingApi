import BlueButton from '@/components/buttons/BlueButton'
import BorderedButton from '@/components/buttons/BorderedButton'
import ErrorMessage from '@/components/error-message/ErrorMessage'
import { UserService } from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import classNames from 'classnames'
import { X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

interface KeysAndHostsFormProps {
	children: any
	buttonText: string
	onSubmit: () => void
	error: AxiosError<{ message: string }> | null
	isPending: boolean
	countOfItems?: number
}

const KeysAndHostsForm = ({
	children,
	buttonText,
	onSubmit,
	error,
	isPending,
	countOfItems
}: KeysAndHostsFormProps) => {
	const [showCreationForm, setShowCreationForm] = useState(false)
	const [enableAnimateAfterChangeTab, setEnableAnimateAfterChangeTab] =
		useState(false)

	const { data: limitOfItems } = useQuery<AxiosResponse<number>>({
		queryKey: ['get-limit'],
		queryFn: () => UserService.getMaxCountOfApiKeysAndHosts(),
		staleTime: 1 * 60 * 1000
	})

	const handleCreateApiKey = useCallback(() => {
		showCreationForm ? onSubmit() : setShowCreationForm(true)
	}, [showCreationForm])

	useEffect(() => {
		if (!!error && !isPending) setShowCreationForm(true)
		else if (isPending) setShowCreationForm(true)
		else if (!error) setShowCreationForm(false)
	}, [error, isPending])

	useEffect(() => {
		const timeoutId = setTimeout(
			() => setEnableAnimateAfterChangeTab(true),
			150
		)
		return () => clearTimeout(timeoutId)
	})

	return (
		<>
			<div className="flex gap-4 items-center mt-5 mb-5">
				<BlueButton onClick={handleCreateApiKey} isPending={isPending}>
					{showCreationForm ? 'Підтвердити' : buttonText}
				</BlueButton>

				{showCreationForm && (
					<BorderedButton
						className={classNames('transition duration-150', {
							'animate-showWithScale visible max-h-[10000px]': showCreationForm,
							'animate-hiddenWithDownsize invisible max-h-[0px]':
								!showCreationForm
						})}
						onClick={() => setShowCreationForm(false)}
					>
						<X size={20} />
					</BorderedButton>
				)}
				<span>
					Кількість: {countOfItems}/{limitOfItems?.data}
				</span>
			</div>

			<form
				className={classNames(
					'flex flex-col gap-3 transition-transform duration-150',
					{
						'animate-showWithScale visible max-h-[10000px]': showCreationForm,
						'animate-hiddenWithDownsize invisible max-h-[0px]':
							!showCreationForm,
						'opacity-0 absolute': !enableAnimateAfterChangeTab
					}
				)}
			>
				{error && <ErrorMessage>{error}</ErrorMessage>}
				{children}
			</form>
		</>
	)
}

export default KeysAndHostsForm
