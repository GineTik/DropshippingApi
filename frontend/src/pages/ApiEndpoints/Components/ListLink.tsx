'use client'
import ScaledButton from '@/components/Buttons/ScaledButton'
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
		<ScaledButton disabled={href === pathname}>
			<Link
				href={href}
				className={classNames('px-3 py-2 pl-10 w-full', {
					'bg-blue-100 rounded-lg font-medium text-nowrap truncate':
						href === pathname
				})}
			>
				{children}
			</Link>
		</ScaledButton>
	)
}

export default ListLink
