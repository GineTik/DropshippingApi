import { Buttons } from '@/components/buttons'
import ErrorMessage from '@/components/error-message/ErrorMessage'
import BaseInput from '@/components/inputs/BaseInput'
import { AllowedHostDto } from '@/dtos/user/allowed-hosts/allowed-host.dto'
import { useTypedMutation } from '@/hooks/useTypedMutation'
import { AllowedHostsService } from '@/services/user/allowed-hosts.service'
import { useForm } from 'react-hook-form'
import Dialog from '../Dialog'

interface CreateAllowedHostsDialogProps {
	refetch: () => void
	show: boolean
	close: () => void
}

const CreateAllowedHostsDialog = ({
	refetch,
	show,
	close
}: CreateAllowedHostsDialogProps) => {
	const { register, getValues } = useForm<AllowedHostDto>({
		defaultValues: {
			name: '',
			host: '',
			description: ''
		}
	})

	const {
		mutateAsync: addAsync,
		isPending,
		error
	} = useTypedMutation({
		mutationKey: ['add-alloed-host-or-ip'],
		mutationFn: () => AllowedHostsService.add(getValues()),
		onSettled: () => {
			close()
			refetch()
		}
	})

	if (!show) return <></>

	return (
		<Dialog
			show={show}
			close={close}
		>
			<div className="flex flex-col gap-3 w-[300px]">
				<h4>Додати хост або айпі</h4>
				<div className="">
					<BaseInput
						className="w-full"
						placeholder="Ім'я"
						type="text"
						{...register('name')}
					/>
				</div>
				<div className="">
					<BaseInput
						className="w-full"
						placeholder="хост або айпі"
						type="text"
						{...register('host')}
					/>
				</div>
				<div className="">
					<BaseInput
						className="w-full"
						placeholder="Опис"
						type="text"
						{...register('description')}
					/>
				</div>
				<Buttons.Primary
					className='w-full'
					onClick={() => addAsync()}
				>
					Створити
				</Buttons.Primary>

				{error && <ErrorMessage className="mt-4">{error}</ErrorMessage>}
			</div>
		</Dialog>
	)
}

export default CreateAllowedHostsDialog
