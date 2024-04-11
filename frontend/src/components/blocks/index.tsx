import { SparkleIcon } from 'lucide-react'
import Banner from './Banner'
import styles from './Blocks.module.scss'

export const Blocks = {
	Banner: Banner,
	Wrapper: ({children, emphasis}: {children: any, emphasis?: boolean}) => 
		<div className={`${styles.block} ${emphasis ? styles.block_emphasis : ''}`}>{children}</div>,
	Icon: () => 
		<div className={styles.block__icon}><SparkleIcon /></div>,
	Title: ({children}: {children: any}) =>
		 <h4 className={styles.block__title}>{children}</h4>,
	Text: ({children}: {children: any}) => 
		<p className={styles.block__text}>{children}</p>
}
