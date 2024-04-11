import { Buttons } from '@/components/buttons'
import Section from '@/components/section/Section'
import { pageInDeveloping } from '@/helpers/ToastHelper'
import styles from './WhoIsMe.module.scss'

const WhoIsMe = () => {
	return (
		<div className={styles.wrapper}>
			<Section className={styles.section}>
				<div className={styles.section__blocks}>
					<div className={styles.section__block}>
						<h2>56</h2>
						<p>верифікованих поставщиків</p>
					</div>
					<div className={styles.section__block}>
						<h2>1201</h2>
						<p>дропшиперів, які активно працюють</p>
					</div>
					<div className={`${styles.section__block} ${styles.block_emphasis}`}>
						<h2>88%</h2>
						<p>клієнтів продовжують роботу з нами, коли спробують один раз</p>
					</div>
					<div className={styles.section__block}>
						<h2>100к+</h2>
						<p>товарів, які ви можете продавати прямо зараз</p>
					</div>
				</div>
				<div className={styles.section__content}>
					<h2 className={styles.section__title}>DropshippingBridge - <span className={styles.title__emphasis}>міст</span> між поставщиками та дропшиперами</h2>
					<p className={styles.section__p}>Ми надаємо можливості та функціонал для зручної взаємодії  дропшиперів з поставщиками. Отримуйте великий вибір товарів або багато нових клієнтів.</p>
					<Buttons.PrimaryBorderWithArrow 
						className={styles.section__button}
						onClick={() => pageInDeveloping('Про нас')}
					>
						Про нас
					</Buttons.PrimaryBorderWithArrow>
				</div>
			</Section>
		</div>
	)
}

export default WhoIsMe
