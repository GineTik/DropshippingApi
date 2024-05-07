import { Buttons } from "@/components/buttons"
import { settingsInDeveloping } from "@/helpers/ToastHelper"
import { MutationFunction, useMutation } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"
import { PenIcon, Undo2Icon } from "lucide-react"
import { useCallback, useState } from "react"
import { toast } from "react-toastify"
import styles from './Settings.module.scss'

interface SettingProps {
	title: string
	children: any
	buttonText?: string
	sendRequest?: MutationFunction<AxiosResponse<any, any>>
	onChangeSetting?: () => void
	inDeveloping?: boolean
}

const Setting = ({title, children,  sendRequest: sentRequest, onChangeSetting, inDeveloping}: SettingProps) => {

	const [toastId, setToastId] = useState<any>(null)

	const {
		mutateAsync: changeSetting
	} = useMutation<AxiosResponse, AxiosError<{ message: string }>>({
		mutationKey: [`change-${title}`],
		mutationFn: (v) => sentRequest!(v),
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
			setChanging(false)
		},
		onError: (err) => {
			toast.update(toastId, { render: err.response?.data.message, type: "error", isLoading: false, closeOnClick: true, autoClose: 2000 });
		}
	})
	
	const [changing, setChanging] = useState(false)

	const toggleChangingMode = useCallback(() => {
		if (inDeveloping) {
			settingsInDeveloping()
			return
		}

		setChanging(o => !o)
	}, [])

	return <div>
		<form className={styles.form}>
			<h6 className={styles.form__title}>{title}</h6>
			<div className={styles.form__content}>
				<div className={`${styles.form__fields} ${!changing && styles.form__fields_non_updated}`}>
					{children}
				</div>

				<Buttons.Icon
					onClick={(e) => {
						toggleChangingMode()
					}}
				>
					{changing 
						? <Undo2Icon className={styles.form__icon} /> 
						: <PenIcon className={styles.form__icon} />}
				</Buttons.Icon>

				{changing && <Buttons.Secondary 
				onClick={() => !inDeveloping ? changeSetting() : toast.warning('Дане налаштування в розробці')}>
					Зберегти
				</Buttons.Secondary>}
			</div>
		</form>
	</div>
}

export default Setting
