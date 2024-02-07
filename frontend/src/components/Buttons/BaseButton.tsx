'use client'
import classNames from 'classnames'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export interface BaseButtonProps {
	className?: string
	children: string | React.ReactElement | (string | React.ReactElement)[]
	href?: string
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
	disabled?: boolean
	isPending?: boolean
}

const BaseButton = ({
	className,
	children,
	href,
	onClick,
	disabled,
	isPending
}: BaseButtonProps) => {
	return (
		<Link
			className={classNames(
				className,
				'rounded-full px-7 py-[10px] cursor-pointer',
				'font-medium',
				'transition ease-in-out',
				'inline-flex items-center'
			)}
			href={href ?? '#'}
			onClick={(e) => {
				if (!disabled && !isPending && onClick) onClick(e)
			}}
		>
			{isPending ? <Loader2 className="animate-spin" size={20} /> : children}
		</Link>
	)
}

export default BaseButton
