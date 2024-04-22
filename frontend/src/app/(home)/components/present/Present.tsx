import blocks from '@/components/blocks/Blocks.module.scss'
import { Buttons } from '@/components/buttons'
import Section from '@/components/section/Section'
import { pageInDeveloping } from '@/helpers/ToastHelper'
import Link from 'next/link'
import RouteConstants from '../../../../../constants/RouteConstants'
import styles from './Present.module.scss'

const Present = () => {
	return (
		<Section className={styles.section}>
			<div className="flex flex-col items-center md:items-start w-full">
				<Buttons.Tag onClick={() => pageInDeveloping('Для поставщика')}>Для дропшипера</Buttons.Tag>
				<h1 className={styles.title}>
					Кращий досвід дропшипінга з <span className='text-blue-700 font-medium'>DropshippingBridge</span>
				</h1>
				<p className={styles.p}>
					<span className={styles.emphasis}>Вибирай</span> та <span className={styles.emphasis}>фільтруй</span> товари поставщиків, використовуючи зручний інтерфейс або апі.
				</p>
				<Buttons.Present as={Link} href={RouteConstants.Registration}>ЗАРЕЄСТРУВАТИСЬ</Buttons.Present>
			</div>
			<div className="gap-5 items-start pt-[60px] xl:flex hidden">
				<div className='w-[180px] grid gap-5'>
					<div className={`${blocks.block_small_gray} w-[145px] h-[60px] mt-[150px]`}>
						100k+ товарів
					</div>
					<div className={`${blocks.block_gray} w-full h-[250px]`}></div>
				</div>
				<div className='w-[200px] grid gap-5'>
					<div className={`${blocks.block_blue} w-full h-[260px]`}></div>
					<div className={`${blocks.block_small_gray} w-full h-[100px]`}></div>
				</div>
			</div>
		</Section>
	)
}

export default Present
