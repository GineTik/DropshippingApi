'use client'
import { Buttons } from '@/components/buttons'
import RouteConstants from '../../../../constants/RouteConstants'
import styles from './Navigation.module.scss'

const ApiNavigation = () => {
	return (
		<div className={styles.navigation}>
			<div className={styles.navigation__section}>
				<h5 className={styles.navigation__title}>Основне</h5>
				<div  className={styles.navigation__list}>
					<Buttons.ApiTab href={RouteConstants.Api.Introduction}>Вступ</Buttons.ApiTab>
					<Buttons.ApiTab href={RouteConstants.Api.HowItWorks}>Як це працює</Buttons.ApiTab>
					<Buttons.ApiTab href={RouteConstants.Api.Filtration}>Фільтрація</Buttons.ApiTab>
					<Buttons.ApiTab href={RouteConstants.Api.Errors}>Можливі помилки</Buttons.ApiTab>
				</div>
			</div>

			<div className={styles.navigation__section}>
				<h5 className={styles.navigation__title}>Кінцеві точки</h5>
				<div className={styles.navigation__list}>
					<Buttons.ApiTab href={RouteConstants.Api.GetFilteredOffers}>
						Відфільтровані пропозиції
					</Buttons.ApiTab>
					<Buttons.ApiTab href={RouteConstants.Api.GetOneOffer}>
						Отримати пропозицію
					</Buttons.ApiTab>
					<Buttons.ApiTab href={RouteConstants.Api.SendOrder}>
						Надіслати замовлення
					</Buttons.ApiTab>
					<Buttons.ApiTab href={RouteConstants.Api.GetExtract}>
						Отримати вижимку даних
					</Buttons.ApiTab>
				</div>
			</div>
		</div>
	)
}

export default ApiNavigation
