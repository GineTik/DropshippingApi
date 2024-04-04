import BlueButton from "@/components/buttons/old-buttons/BlueButton"
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
		<h5>{title}</h5>
		<form className="flex flex-col gap-3 mt-3 mb-7">
			{children}
			<BlueButton className="text-sm" onClick={() => changeSetting()} isPending={isPending}>{buttonText}</BlueButton>
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</form>
	</div>
}

export default Setting
