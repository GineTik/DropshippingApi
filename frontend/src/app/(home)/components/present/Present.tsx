import { Buttons } from '@/components/buttons'
import Section from '@/components/section/Section'
import styles from './Present.module.scss'

const Present = () => {
	return (
		<Section className={styles.section}>
			<div className="flex flex-col items-center md:items-start w-full">
				<span className={styles.tag}>Для дропшипера</span>
				<h1 className={styles.title}>
					Кращий досвід дропшипінга з <span className='text-blue-700 font-medium'>DropshippingBridge</span>
				</h1>
				<p className={styles.p}>
					<span className={styles.emphasis}>Вибирай</span> та <span className={styles.emphasis}>фільтруй</span> товари поставщиків, використовуючи зручний інтерфейс або апі.
				</p>
				<Buttons.Present>ЗАРЕЄСТРУВАТИСЬ</Buttons.Present>
			</div>
			<div className="flex gap-5 items-start pt-[60px]">
				<div className='w-[240px] grid gap-5'>
					<div className='w-[175px] h-[80px] border-2 border-gray-500 rounded-[10px] bg-slate-900 ml-auto mt-[150px]'></div>
					<div className='w-full h-[300px] border-2 border-gray-500 rounded-[10px] bg-slate-900'></div>
				</div>
				<div className='w-[240px] grid gap-5'>
					<div className='w-full h-[330px] rounded-[10px] bg-blue-600'></div>
					<div className='w-full h-[100px] border-2 border-gray-500 rounded-[10px] bg-slate-900'></div>
				</div>
			</div>
		</Section>
	)
}

export default Present
