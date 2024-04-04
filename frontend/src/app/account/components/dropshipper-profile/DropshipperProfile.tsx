'use client'
import { Buttons } from "@/components/buttons"
import Section from "@/components/section/Section"
import styles from './DropshipperProfile.module.scss'
import AllowedHosts from "./allowed-hosts/AllowedHosts"
import ApiKeys from "./api-keys/ApiKeys"

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
				<ApiKeys />
				<AllowedHosts />
			</div>
		</Section>
	)
}

export default DropshipperProfile
