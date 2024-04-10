'use client'
import Rating from '@/components/rating/Rating'
import { SupplierSettings } from '@/dtos/user/settings/supplier-settings.dto'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import RouteConstants from '../../../../../constants/RouteConstants'
import styles from './SupplierItem.module.scss'

const SupplierItem = (supplier: SupplierSettings) => {
	const router = useRouter()

	const pushHref = useCallback((event: any) => {
		event.stopPropagation();
		router.push(RouteConstants.Supplier + supplier.id);
	}, [])

	return (
		<div onClick={pushHref} className={styles.card}>
			<h5>{supplier.publicName}</h5>
			<p className={styles.card__p}>{supplier.description}</p>
			<div className={styles.card__tags}>
				<span className={styles.tags__title}>Теги: </span> 
				{supplier.tags && supplier.tags.length > 0 ? supplier.tags.map((o, i) => 
					<><span>{o.name}</span>{i != supplier.tags.length - 1 && ','} </>
				) : <span className={styles.tags__nothing}>Немає</span> }
			</div>
			<div className={styles.card__buttons}>
				<Rating short />
			</div>
		</div>
	)
}

export default SupplierItem
