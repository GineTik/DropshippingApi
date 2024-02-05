import DynamicHeroIcon from '@/components/common/dynamic-hero-icon/DynamicHeroIcon'
import { AxiosError } from 'axios'

interface ErrorMessageProps {
	children: AxiosError<{ message: string | string[] }> | string
}

const ErrorMessage = ({ children: error }: ErrorMessageProps) => {
	var message = ''
	if (typeof error === 'string') {
		message = error
	} else {
		const errorMessage = error.response?.data?.message
		if (errorMessage && errorMessage.length > 0) {
			if (typeof errorMessage === 'string') message = errorMessage
			else message = errorMessage[0]
		} else if (error.status === 400) {
			message = 'Невідома помилка, ми знаєм про неї та вирішуємо її'
		} else {
			message = 'Невідома помилка на сервері, ми знаєм про неї та вирішуємо її'
		}
	}

	return (
		<div className="flex bg-rose-100 p-3 rounded-xl border border-rose-500">
			<DynamicHeroIcon
				icon="ExclamationCircleIcon"
				className="min-w-5 w-5 text-rose-900"
			/>
			<span className="ml-2">{message}</span>
		</div>
	)
}

export default ErrorMessage
