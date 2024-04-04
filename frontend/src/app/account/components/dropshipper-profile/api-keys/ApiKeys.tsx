import { Buttons } from '@/components/buttons'
import { ApiKeyDto } from '@/dtos/user/api-key/api-key.dto'
import { ApiKeysService } from '@/services/user/api-keys.service'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { Expand, Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../DropshipperProfile.module.scss'
import CreateApiKeysDialog from './CreateApiKeysDialog'
import ReadAndEditApiKeysDialog from './ReadAndEditApiKeysDialog'

const ApiKeys = () => {
	const { data: apiKeys, refetch } = useQuery<AxiosResponse<ApiKeyDto[]>>({
		queryKey: ['get-api-keys'],
		queryFn: () => ApiKeysService.getAll(),
		staleTime: 1 * 60 * 1000
	})

	const [creatingDialogOpened, setCreatingDialogOpened] = useState(false)
	const [selectedItem, setSelectedItem] = useState<ApiKeyDto | null>(null)

	return (
		<>
		<div className={styles.allows}>
			<div className={styles.allows_header}>
				<h3>Апі ключі</h3>
				<Buttons.Icon onClick={() => setCreatingDialogOpened(true)}><Plus /></Buttons.Icon>
			</div>
			<p className={styles.p}>Використовуйте апі ключі для доступу до кінцевих точок АПІ. <Link className="text-blue-600 underline-offset-4 underline hover:text-blue-400 transition" href="#">Детальніше</Link></p>
			{apiKeys?.data?.map(k => 
			<div 
				className={styles.allows_item}
				onClick={() => setSelectedItem(k)}
			>
				{k.name}
				<Expand className='text-gray-400' size={15} />
			</div>)}
		</div>
		
		<CreateApiKeysDialog 
			close={() => setCreatingDialogOpened(false)}
			refetch={refetch} 
			show={creatingDialogOpened} 
		/>

		{selectedItem && <ReadAndEditApiKeysDialog 
			item={selectedItem}
			close={() => setSelectedItem(null)}
			refetch={refetch} 
			show={selectedItem !== null}
		/>}

		</>


		
		// <div>
		// 	<h4 className="mb-3">АПІ ключі</h4>

		// 	<div className="flex flex-col gap-2">
		// 		{apiKeys?.data?.map((apiKey, i) => (
		// 			<ApiKeyItem apiKey={apiKey} key={i} refetch={refetch} />
		// 		))}
		// 	</div>

		// 	<KeysAndHostsForm
		// 		buttonText={'Створити АПІ ключ'}
		// 		onSubmit={() => createApiKeyAsync()}
		// 		error={error}
		// 		isPending={isPending}
		// 		countOfItems={apiKeys?.data?.length}
		// 	>
		// 		<div className="flex gap-3">
		// 			<StyledInput
		// 				className="w-1/2"
		// 				placeholder="Назва"
		// 				type="text"
		// 				value={data.name}
		// 				onChange={(e) => setData({ ...data, name: e.target.value })}
		// 			></StyledInput>
		// 			<StyledInput
		// 				className="w-1/2"
		// 				placeholder="Опис"
		// 				type="text"
		// 				value={data.description}
		// 				onChange={(e) => setData({ ...data, description: e.target.value })}
		// 			></StyledInput>
		// 		</div>
		// 	</KeysAndHostsForm>
		// </div>
	)
}

export default ApiKeys
