import classNames from 'classnames'
import { ArrowRight } from 'lucide-react'
import BaseButton, { BaseButtonProps } from './BaseButton'
import styles from './Button.module.scss'

export const Buttons = {
	Primary: (props: BaseButtonProps & {
		lightBg?: boolean
	}) => {
		return <BaseButton {...props} className={`${styles.primary} ${props.className} ${props.lightBg ? 'hover:text-black' : 'hover:text-white'}`} />
	},
	Present: (props: BaseButtonProps) => {
		return <BaseButton {...props} className={`${styles.primary} ${props.className} hover:text-lime`}>
			{props.children} <ArrowRight className='ml-3' size={18} />
		</BaseButton>
	},
	PrimaryReverse: (props: BaseButtonProps) => {
		return <BaseButton {...props} className={`${styles.primary_reverse} ${props.className}`} />
	},
	Secondary: (props: BaseButtonProps) => {
		const cn = classNames(styles.secondary, 'py-3 px-7', props.className)
		return <BaseButton {...props} className={cn} />
	},
	Icon: (props: BaseButtonProps) => {
		const cn = classNames(styles.secondary, 'p-2', props.className)
		return <BaseButton {...props} className={cn} />
	},
	Emerging: (props: BaseButtonProps) => {
		const cn = classNames(styles.emerging, 'py-3 px-7', props.className)
		return <BaseButton {...props} className={cn} />
	},
}
