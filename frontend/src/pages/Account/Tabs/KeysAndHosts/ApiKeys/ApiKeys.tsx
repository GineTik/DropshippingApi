import H4 from '@/components/Headings/H4'
import { ApiKeyDto } from '@/dtos/user/api-key/api-key.dto'
import { CreateApiKeyDto } from '@/dtos/user/api-key/create-api-key.dto'
import { useTypedMutation } from '@/hooks/useTypedMutation'
import StyledInput from '@/pages/Authentication/Input/Input'
import { ApiKeysService } from '@/services/user/api-keys.service'
import { UserService } from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useCallback, useState } from 'react'
import KeysAndHostsForm from '../Common/KeysAndHostsForm'
import ApiKeyItem from './ApiKeyItem'

const ApiKeys = () => {
	const { data: apiKeys, refetch } = useQuery<AxiosResponse<ApiKeyDto[]>>({
		queryKey: ['get-api-keys'],
		queryFn: () => ApiKeysService.getApiKeys()
	})

	const { data: maxCountOfApiKeys } = useQuery<AxiosResponse<number>>({
		queryKey: ['get-max-count'],
		queryFn: () => UserService.getMaxCountOfApiKeysAndHosts()
	})

	const [showCreationForm, setShowCreationForm] = useState(false)

	const [data, setData] = useState<CreateApiKeyDto>({
		name: '',
		description: ''
	})

	const {
		mutateAsync: createApiKeyAsync,
		isPending,
		error
	} = useTypedMutation({
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
				{apiKeys?.data?.map((apiKey, i) => (
					<ApiKeyItem apiKey={apiKey} key={i} refetch={refetch} />
				))}
			</div>

			<KeysAndHostsForm
				buttonText={'Створити АПІ ключ'}
				onSubmit={() => createApiKeyAsync()}
				error={error}
				isPending={isPending}
				countOfItems={apiKeys?.data?.length}
			>
				<div className="flex gap-3">
					<StyledInput
						className="w-1/2"
						placeholder="Назва"
						type="text"
						value={data.name}
						onChange={(e) => setData({ ...data, name: e.target.value })}
					></StyledInput>
					<StyledInput
						className="w-1/2"
						placeholder="Опис"
						type="text"
						value={data.description}
						onChange={(e) => setData({ ...data, description: e.target.value })}
					></StyledInput>
				</div>
			</KeysAndHostsForm>
		</div>
	)
}

export default ApiKeys
