'use client'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface ListLinkProps {
	href: string
	children: any
}

const ListLink = ({ href, children }: ListLinkProps) => {
	const pathname = usePathname()
	return (
		<Link
			href={href}
			className={classNames(
				'block pl-8 py-2 rounded-xl',
				'transition-colors duration-75 ease-out',
				'hover:bg-gray-100',
				{
					'bg-blue-50 font-medium': pathname == href
				}
			)}
		>
			{children}
		</Link>
	)
}

export default ListLink
