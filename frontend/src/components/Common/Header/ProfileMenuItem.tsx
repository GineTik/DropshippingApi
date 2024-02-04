'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ProfileMenuItemProps {
	children: string | string[]
	href?: string
	isDanger?: boolean
	onClick?: () => void
}

const ProfileMenuItem = ({
	children,
	href,
	isDanger,
	onClick
}: ProfileMenuItemProps) => {
	const pathname = usePathname()
	return (
		<Link
			href={href ?? 'none'}
			onClick={onClick}
			className={classNames(
				'block px-4 py-2 hover:bg-blue-50 rounded-xl',
				'transition-colors duration-100',
				isDanger ? 'hover:bg-rose-50' : 'hover:bg-blue-50',
				pathname == href ? (isDanger ? 'bg-rose-50' : 'bg-blue-50') : ''
			)}
		>
			{children}
		</Link>
	)
}

export default ProfileMenuItem
