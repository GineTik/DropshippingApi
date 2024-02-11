'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DynamicHeroIcon from '../icons/DynamicHeroIcon'

interface IProps {
	href: string
	icon: string
	text: string
}

const MenuItem = ({ href, icon, text }: IProps) => {
	const pathname = usePathname()
	const isActive = pathname == href

	return (
		<Link
			href={href}
			className={classNames(
				'py-4 px-7 rounded-full',
				'flex items-center',
				'group transition',
				'hover:text-blue-600 dark:hover:text-blue-300',
				{
					'text-gray-500 dark:text-gray-400': !isActive,
					'bg-blue-200 text-blue-600 dark:bg-blue-900 dark:text-blue-300 font-semibold':
						isActive
				}
			)}
		>
			<DynamicHeroIcon icon={icon} className="w-6" />
			<h5
				className={classNames('pl-8 font-medium text-lg', {
					'font-semibold': isActive
				})}
			>
				{text}
			</h5>
		</Link>
	)
}

export default MenuItem
