import { Buttons } from '@/components/buttons'
import Section from '@/components/section/Section'
import styles from './Present.module.scss'

const Present = () => {
	return (
		<Section className={styles.section}>
			<div className="flex flex-col items-center md:items-start w-full">
				<Buttons.Tag>Для дропшипера</Buttons.Tag>
				<h1 className={styles.title}>
					Кращий досвід дропшипінга з <span className='text-blue-700 font-medium'>DropshippingBridge</span>
				</h1>
				<p className={styles.p}>
					<span className={styles.emphasis}>Вибирай</span> та <span className={styles.emphasis}>фільтруй</span> товари поставщиків, використовуючи зручний інтерфейс або апі.
				</p>
				<Buttons.Present>ЗАРЕЄСТРУВАТИСЬ</Buttons.Present>
			</div>
			<div className="flex gap-5 items-start pt-[60px]">
				<div className='w-[180px] grid gap-5'>
					<div className={`${styles.block_gray} w-[145px] h-[60px] mt-[150px]`}>
						100k+ товарів
					</div>
					<div className={`${styles.block_gray} w-full h-[250px]`}></div>
				</div>
				<div className='w-[200px] grid gap-5'>
					<div className='w-full h-[260px] rounded-[10px] bg-blue-600'></div>
					<div className={`${styles.block_gray} w-full h-[100px]`}></div>
				</div>
			</div>
		</Section>
	)
}

export default Present
