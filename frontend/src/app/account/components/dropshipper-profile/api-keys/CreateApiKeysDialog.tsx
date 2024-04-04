import { Buttons } from '@/components/buttons'
import ErrorMessage from '@/components/error-message/ErrorMessage'
import StyledInput from '@/components/inputs/Input'
import { ApiKeyDto } from '@/dtos/user/api-key/api-key.dto'
import { useTypedMutation } from '@/hooks/useTypedMutation'
import { ApiKeysService } from '@/services/user/api-keys.service'
import { useForm } from 'react-hook-form'
import Dialog from '../Dialog'

interface CreateApiKeysDialogProps {
	refetch: () => void
	show: boolean
	close: () => void
}

const CreateApiKeysDialog = ({
	refetch,
	show,
	close
}: CreateApiKeysDialogProps) => {
	const { register, getValues } = useForm<ApiKeyDto>({
		defaultValues: {
			name: '',
			description: ''
		}
	})

	const {
		mutateAsync: createApiKeyAsync,
		isPending,
		error
	} = useTypedMutation({
		mutationKey: ['create-api-key'],
		mutationFn: () => ApiKeysService.create(getValues()),
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
				<h4>Створити АПІ ключ</h4>
				<div className="">
					<StyledInput
						className="w-full"
						placeholder="Ім'я"
						type="text"
						{...register('name')}
					/>
				</div>
				<div className="">
					<StyledInput
						className="w-full"
						placeholder="Опис"
						type="text"
						{...register('description')}
					/>
				</div>
				<Buttons.Primary
					className='w-full'
					onClick={() => createApiKeyAsync()}
				>
					Створити
				</Buttons.Primary>

				{error && <ErrorMessage className="mt-4">{error}</ErrorMessage>}
			</div>
		</Dialog>
	)
}

export default CreateApiKeysDialog
