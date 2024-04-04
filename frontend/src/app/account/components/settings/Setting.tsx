import { Buttons } from "@/components/buttons"
import ErrorMessage from "@/components/error-message/ErrorMessage"
import { MutationFunction, useMutation } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"

interface SettingProps {
	title: string
	children: any
	buttonText: string
	sendRequest: MutationFunction<AxiosResponse<any, any>>
	onChangeSetting?: () => void
}

const Setting = ({title, children, buttonText, sendRequest: sentRequest, onChangeSetting}: SettingProps) => {

	const {
		mutateAsync: changeSetting,
		error,
		isPending
	} = useMutation<AxiosResponse, AxiosError<{ message: string }>>({
		mutationKey: [`change-${title}`],
		mutationFn: (v) => sentRequest(v),
		onSuccess: () => {
			onChangeSetting && onChangeSetting()
		}
	})

	return <div>
		<form className="mb-7">
			<h6 className="mb-2">{title}</h6>
			<div className="flex gap-2">
				{children}
				
				<Buttons.Secondary
					onClick={() => changeSetting()}
				>
					{buttonText}
				</Buttons.Secondary>
				
				{error && <ErrorMessage>{error}</ErrorMessage>}
			</div>
		</form>
	</div>
}

export default Setting
