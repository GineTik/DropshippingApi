import { Buttons } from "@/components/buttons"
import ErrorMessage from "@/components/error-message/ErrorMessage"
import { MutationFunction, useMutation } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

interface SettingProps {
	title: string
	children: any
	buttonText: string
	sendRequest: MutationFunction<AxiosResponse<any, any>>
	onChangeSetting?: () => void
}

const Setting = ({title, children, buttonText, sendRequest: sentRequest, onChangeSetting}: SettingProps) => {

	const [toastId, setToastId] = useState<any>(null)

	const {
		mutateAsync: changeSetting,
		error,
	} = useMutation<AxiosResponse, AxiosError<{ message: string }>>({
		mutationKey: [`change-${title}`],
		mutationFn: (v) => sentRequest(v),
		onMutate: () => {
			toast.clearWaitingQueue()
			setToastId(toast.loading('Змінюємо'))
		},
		onSuccess: () => {
			onChangeSetting && onChangeSetting()
			toast.update(toastId, { render: "Оновлено", type: "success", isLoading: false, closeOnClick: true, autoClose: 2000 });
		},
		onSettled: () => {
			toast.clearWaitingQueue()
		},
		onError: (err) => {
			toast.update(toastId, { render: err.response?.data.message, type: "error", isLoading: false, closeOnClick: true, autoClose: 2000 });
		}
	})

	return <div>
		<form className="mb-7">
			<h6 className="mb-2">{title}</h6>
			<div className="flex gap-2">
				{children}
				
				<Buttons.Secondary
					onClick={(e) => changeSetting()}
				>
					{buttonText}
				</Buttons.Secondary>
				
				{error && <ErrorMessage>{error}</ErrorMessage>}
			</div>
		</form>
	</div>
}

export default Setting
