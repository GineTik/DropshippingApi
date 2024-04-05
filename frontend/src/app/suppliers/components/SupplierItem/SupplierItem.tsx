'use client'
import { Buttons } from '@/components/buttons'
import { SupplierSettings } from '@/dtos/user/settings/supplier-settings.dto'
import { HeartIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
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
			<div className={styles.card__tags}><span className={styles.tags__title}>Теги:</span> Для дома, дешевий сегмент, і тому подібне</div>
			<div className={styles.card__buttons}>
				<Buttons.Icon onClick={(e) => {e.stopPropagation()}}><ThumbsUpIcon /></Buttons.Icon>
				<Buttons.Icon onClick={(e) => {e.stopPropagation()}}><ThumbsDownIcon /></Buttons.Icon>
				<Buttons.Icon onClick={(e) => {e.stopPropagation()}}><HeartIcon /></Buttons.Icon>
			</div>
		</div>
	)
}

export default SupplierItem
