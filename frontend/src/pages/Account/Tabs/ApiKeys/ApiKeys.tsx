import BlueButton from '@/components/Buttons/BlueButton'
import H4 from '@/components/Headings/H4'
import { ApiKeyDto } from '@/dtos/user/api-key/api-key.dto'
import { CreateApiKeyDto } from '@/dtos/user/api-key/create-api-key.dto'
import StyledInput from '@/pages/Authentication/Input/Input'
import { ApiKeysService } from '@/services/user/api-keys.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useCallback, useState } from 'react'
import ApiKeyItem from './ApiKeyItem'

const ApiKeys = () => {
	const { data: apiKeys, refetch } = useQuery<AxiosResponse<ApiKeyDto[]>>({
		queryKey: ['get-api-keys'],
		queryFn: () => ApiKeysService.getApiKeys()
	})

	const { data: maxCountOfApiKeys } = useQuery<AxiosResponse<number>>({
		queryKey: ['get-max-count-of-api-keys'],
		queryFn: () => ApiKeysService.getMaxCountOfApiKeys()
	})

	const [showCreationForm, setShowCreationForm] = useState(false)

	const [data, setData] = useState<CreateApiKeyDto>({
		name: '',
		description: ''
	})

	const { mutateAsync: createApiKeyAsync, isPending } = useMutation({
		mutationKey: ['create-api-key'],
		mutationFn: () => ApiKeysService.createApiKey(data),
		onSettled: () => {
			setShowCreationForm(false)
			refetch()
		}
	})

	const handleCreateApiKey = useCallback(() => {
		showCreationForm ? createApiKeyAsync() : setShowCreationForm(true)
	}, [showCreationForm])

	return (
		<div>
			<H4 className="mb-3">АПІ ключі</H4>

			<div className="flex flex-col gap-2">
				{apiKeys?.data?.map((key, i) => (
					<ApiKeyItem
						{...key}
						apiKey={key.key}
						key={i}
						refetchApiKeys={refetch}
					/>
				))}
			</div>

			{showCreationForm && (
				<div className="flex gap-3 mt-8">
					<StyledInput
						placeholder="Назва"
						type="text"
						value={data.name}
						onChange={(e) => setData({ ...data, name: e.target.value })}
					></StyledInput>
					<StyledInput
						placeholder="Опис"
						type="text"
						value={data.description}
						onChange={(e) => setData({ ...data, description: e.target.value })}
					></StyledInput>
				</div>
			)}

			<div className="flex gap-4 items-center mt-5">
				<BlueButton onClick={handleCreateApiKey} isPending={isPending}>
					Створити АПІ ключ
				</BlueButton>
				<span>
					Кількість ключів: {apiKeys?.data.length}/{maxCountOfApiKeys?.data}
				</span>
			</div>
		</div>
	)
}

export default ApiKeys
