import { CreateApiKeyDto } from '@/dtos/user/api-key/create-api-key.dto'
import StyledInput from '@/pages/Authentication/Input/Input'
import { ApiKeysService } from '@/services/user/api-keys.service'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'

const CreateApiKeyForm = () => {
	const [data, setData] = useState<CreateApiKeyDto>({
		name: '',
		description: ''
	})

	const { mutateAsync: createApiKeyAsync } = useMutation({
		mutationKey: ['create-api-key'],
		mutationFn: () => ApiKeysService.createApiKey(data),
		onSettled: () => {}
	})

	return (
		<form>
			<StyledInput
				placeholder="Назва"
				type={''}
				value={''}
				onChange={function (event: ChangeEvent<any>): void {
					throw new Error('Function not implemented.')
				}}
			></StyledInput>
			<StyledInput
				placeholder="Опис"
				type={''}
				value={''}
				onChange={function (event: ChangeEvent<any>): void {
					throw new Error('Function not implemented.')
				}}
			></StyledInput>
		</form>
	)
}

export default CreateApiKeyForm
