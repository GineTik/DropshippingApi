import { AllowedHostDto } from '@/dtos/user/allowed-hosts/allowed-host.dto'
import { useTypedMutation } from '@/hooks/useTypedMutation'
import StyledInput from '@/pages/Authentication/Input/Input'
import { AllowedHostsService } from '@/services/user/allowed-hosts.service'
import { useForm } from 'react-hook-form'
import EditingDialog from '../Common/EditingDialog'

interface HostEditingDialogProps {
	allowedHost: AllowedHostDto
	refetch: () => void
	editing: boolean
	close: () => void
}

const HostEditingDialog = ({
	allowedHost: { name, description, host },
	refetch,
	editing,
	close
}: HostEditingDialogProps) => {
	const { register, getValues } = useForm<AllowedHostDto>({
		defaultValues: {
			name,
			description,
			host
		}
	})

	const {
		mutateAsync: updateAsync,
		isPending,
		error
	} = useTypedMutation({
		mutationKey: ['update-allowed-host'],
		mutationFn: () =>
			AllowedHostsService.update({
				...getValues(),
				newHost: getValues().host,
				oldHost: host
			}),
		onSuccess: () => {
			close()
			refetch()
		}
	})

	if (!editing) return <></>

	return (
		<EditingDialog
			editing={editing}
			close={close}
			onSubmit={() => updateAsync()}
			isPending={isPending}
			error={error}
			title="Оновити дані про хост"
		>
			<div className="flex gap-3">
				<div className="w-1/2">
					<div className="ml-5 text-sm mb-2">Ім'я</div>
					<StyledInput
						className="w-full"
						placeholder="Ім'я"
						type="text"
						{...register('name')}
					/>
				</div>
				<div className="w-1/2">
					<div className="ml-5 text-sm mb-2">Хост</div>
					<StyledInput
						className="w-full"
						placeholder="Хост"
						type="text"
						{...register('host')}
					/>
				</div>
			</div>
			<div>
				<div className="ml-5 text-sm mb-2">Опис</div>
				<StyledInput
					className="w-full"
					placeholder="Опис"
					type="text"
					{...register('description')}
				/>
			</div>
		</EditingDialog>
	)
}

export default HostEditingDialog
