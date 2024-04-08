'use client'
import { Buttons } from "@/components/buttons"
import EntityList from "@/components/entity-list/EntityList"
import Section from "@/components/section/Section"
import { AllowedHostsService } from "@/services/user/allowed-hosts.service"
import { ApiKeysService } from "@/services/user/api-keys.service"
import styles from './DropshipperProfile.module.scss'

const DropshipperProfile = () => {
	return (
		<Section className={styles.profile}>
			<div className={styles.orders}>
				<div className={styles.orders_header}>
					<h3>Замовлення</h3>
					<Buttons.Secondary>Оформлені</Buttons.Secondary>
				</div>
				<p className={styles.p}>Тут знаходяться усі замовлення, які не обробляються поставщиками автоматично. Тому вам потрібно перейти до поставщика на сайт або іншим способом надати інформацію про замовлення поставщику.</p>
			</div>
			<div>
				<EntityList
					title='Апі ключі'
					creationTitle='Додати апі ключ'
					readTitle='Апі ключ'
					description='Використовуйте апі ключі для доступу до кінцевих точок АПІ.'
					moreHref='#'
					getAllItems={() => ApiKeysService.getAll()}
					createItemRequest={(values) => ApiKeysService.create(values)}
					changingFields={{
						name: '',
						description: ''
					}}
					contentOfItem={o => o.name}
					copyData={o => o.key}
					translates={{
						name: 'Im\'я',
						description: 'Опис',
						key: 'Ключ',
					}}
				/>
				<EntityList
					title='Хости та айпі'
					creationTitle='Додати хост або айпі'
					readTitle='Хост або айпі'
					description='Надайте нам хости та/або айпі з яких ви будете надсилати нам запити.'
					moreHref='#'
					getAllItems={() => AllowedHostsService.getAll()}
					createItemRequest={(values) => AllowedHostsService.add(values)}
					changingFields={{
						name: '',
						description: ''
					}}
					contentOfItem={o => o.name}
					copyData={o => o.host}
					translates={{
						name: 'Im\'я',
						description: 'Опис',
						host: 'Хост/айпі',
					}}
				/>
			</div>
		</Section>
	)
}

export default DropshipperProfile
