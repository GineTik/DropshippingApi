import DynamicHeroIcon from '@/components/icons/DynamicHeroIcon'
import { AxiosError } from 'axios'
import classNames from 'classnames'
import { CircleAlert } from 'lucide-react'

interface ErrorMessageProps {
	children: AxiosError<{ message: string | string[] }> | string
	className?: string
}

const ErrorMessage = ({ children: error, className }: ErrorMessageProps) => {
	var message: string | string[] = ''
	if (typeof error === 'string') {
		message = error
	} else {
		const errorMessage = error.response?.data?.message
		message =
			errorMessage && errorMessage.length > 0
				? errorMessage
				: error.status === 400
				? 'Невідома помилка, ми знаєм про неї та вирішуємо її'
				: 'Невідома помилка на сервері, ми знаєм про неї та вирішуємо її'
	}

	return (
		<div
			className={classNames(
				'flex bg-rose-100 p-3 rounded-xl border border-rose-500 animate-showWithScale',
				className
			)}
		>
			<DynamicHeroIcon
				icon={CircleAlert}
				className="min-w-5 w-5 text-rose-900"
			/>
			{Array.isArray(message) ? (
				<div className="flex flex-wrap">
					{message.map((m, i) => (
						<div key={i}>
							<span className="ml-2">{m}</span>
							{message.length - 1 === i ? '' : ','}
						</div>
					))}
				</div>
			) : (
				<span className="ml-2">{message}</span>
			)}
		</div>
	)
}

export default ErrorMessage
