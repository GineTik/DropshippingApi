import StyledInput from '@/components/inputs/Input'
import { ApiKeyDto } from '@/dtos/user/api-key/api-key.dto'
import { useTypedMutation } from '@/hooks/useTypedMutation'
import { ApiKeysService } from '@/services/user/api-keys.service'
import { useForm } from 'react-hook-form'
import EditingDialog from '../common/EditingDialog'

interface ApiKeyEditingDialogProps {
	apiKey: ApiKeyDto
	refetch: () => void
	editing: boolean
	close: () => void
}

const ApiKeyEditingDialog = ({
	apiKey: { name, description, key },
	refetch,
	editing,
	close
}: ApiKeyEditingDialogProps) => {
	const { register, getValues } = useForm<ApiKeyDto>({
		defaultValues: {
			name,
			description
		}
	})

	const {
		mutateAsync: updateAsync,
		isPending,
		error
	} = useTypedMutation({
		mutationKey: ['update-api-key'],
		mutationFn: () =>
			ApiKeysService.update({
				...getValues(),
				key
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
			title="Оновити АПІ ключ"
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
					<div className="ml-5 text-sm mb-2">Опис</div>
					<StyledInput
						className="w-full"
						placeholder="Опис"
						type="text"
						{...register('description')}
					/>
				</div>
			</div>
		</EditingDialog>
	)
}

export default ApiKeyEditingDialog
