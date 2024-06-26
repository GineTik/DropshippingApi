'use client'
import EntityList from '@/components/entity-list/EntityList'
import { Inputs } from '@/components/inputs'
import styles from '@/components/inputs/Input.module.scss'
import { useActions } from '@/hooks/useActions'
import { LinkService } from '@/services/user/link.service'
import { SupplierService } from '@/services/user/supplier.service'
import { TagService } from '@/services/user/tag.service'
import { StateType } from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useSelector } from 'react-redux'
import Setting from "../../components/settings/Setting"

const SupplierSettings = () => {

	const { changePublicName, changeApiNameName, changeDescription, changeYmlType, changeYmlCatalogUrl, changeYmlCatalogRefreshTime } = useActions()
	const settings = useSelector((state: StateType) => state.auth.user.supplierSettings)

	const { data: availableRefreshTimes } = useQuery<AxiosResponse<{id: number, name: string}[]>>({
		queryKey: ['available-refresh-times'],
		queryFn: () => SupplierService.getAvailableRefreshTimes()
	})

	const { data: availableYmlLoadTypes } = useQuery<AxiosResponse<string[]>>({
		queryKey: ['available-yml-load-types'],
		queryFn: () => SupplierService.getAvailableYmlLoadTypes()
	})

  	return (
		<div>
			<Setting title="Публічне ім'я" sendRequest={() => SupplierService.changePublicName(settings.publicName)}>
				<input className={styles.input} value={settings.publicName} onChange={(e) => changePublicName(e.target.value)} />
			</Setting>
			<Setting title="Апі ім'я" sendRequest={() => SupplierService.changeApiName(settings.apiName)}>
				<input className={styles.input} value={settings.apiName} onChange={(e) => changeApiNameName(e.target.value)} />
			</Setting>
			<Setting title="Опис" sendRequest={() => SupplierService.changeDescription(settings.description)}>
				<input className={styles.input} value={settings.description} onChange={(e) => changeDescription(e.target.value)} />
			</Setting>
			<Setting title="Тип загрузки yml файла" sendRequest={() => SupplierService.changeYmlType(settings.ymlLoadType)}>
				<Inputs.Select 
					onChange={(e) => changeYmlType(e.target.value)}
					value={settings.ymlLoadType}>
				{availableYmlLoadTypes?.data.map((type: any) => 
					<option 
						key={crypto.randomUUID()}
						value={type}
					>
						{type}
					</option>
				)}
				</Inputs.Select>
			</Setting>
			{settings.ymlLoadType.toLowerCase() === 'link' && <>
				<Setting title="Силка та частота оновлення yml каталогу"  sendRequest={() => SupplierService.changeYmlCatalogLink({ link: settings.ymlLink, refreshTimeId: settings.refreshTimeId })}>
					<Inputs.InputNonWidth 
						value={settings.ymlLink} 
						onChange={(e) => changeYmlCatalogUrl(e.target.value)} 
						className='min-w-[180px]'
					/>
					<Inputs.Select 
						onChange={(e) => changeYmlCatalogRefreshTime(Number(e.target.value))}
						className=''
						value={settings.refreshTimeId}
					>
						{availableRefreshTimes?.data.map((time: any) => 
							<option 
								key={crypto.randomUUID()} 
								value={time.id}
							>
								{time.name}
							</option>
						)}
					</Inputs.Select>
				</Setting>
			</>}
			<EntityList
				title='Силки'
				description='Після створення наші менеджери мають підтвердити коректність даних, на це потрібно деякий час, дякую за розуміння!'
				creationTitle='Додати нову силку'
				readTitle='Силка'
				getAllItems={() => LinkService.getAll(settings.id)}
				createItemRequest={(values) => LinkService.add(values)}
				deleteItemRequest={(values) => LinkService.delete(values.id)}
				changingFields={{
					name: '',
					url: ''
				}}
				contentOfItem={o => `${o.name} ${!o.verified ? '(не верефіковано)' : ''}`}
				copyData={o => o.url}
				translates={{
					name: 'Назва',
					url: 'Силка',
				}}
				settings
			/>
			<EntityList
				title='Теги'
				creationTitle='Додати новий тег'
				readTitle='Тег'
				getAllItems={() => TagService.getAll(settings.id)}
				createItemRequest={(values) => TagService.add(values)}
				deleteItemRequest={(values) => TagService.delete(values.id)}
				changingFields={{
					name: '',
				}}
				contentOfItem={o => `${o.name} ${!o.verified ? '(не верефіковано)' : ''}`}
				copyData={o => o.url}
				translates={{
					name: 'Назва',
				}}
				settings
			/>
		</div>
	)
}

export default SupplierSettings
