'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef } from 'react'

interface ProfileMenuItemProps {
	children: string | string[]
	href?: string
	isDanger?: boolean
	onClick?: () => void
}

const ProfileMenuItem = forwardRef(
	({ children, href, isDanger, onClick }: ProfileMenuItemProps, ref) => {
		const pathname = usePathname()
		return (
			<Link
				href={href ?? 'none'}
				onClick={onClick}
				className={classNames(
					'block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-[10px]',
					'transition-colors duration-100',
					isDanger ? 'hover:bg-rose-50' : 'hover:bg-blue-50',
					{
						'bg-gray-200 dark:bg-gray-700': pathname == href
					}
				)}
			>
				{children}
			</Link>
		)
	}
)

export default ProfileMenuItem
