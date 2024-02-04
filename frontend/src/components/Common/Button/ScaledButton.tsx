import classNames from 'classnames'
import React from 'react'

interface ScaledButtonProps extends React.HTMLAttributes<HTMLDivElement> {
	children: any
	isDanger?: boolean
	tooltip?: string
	withoutActiveStyle?: boolean
	disabled?: boolean
}

const ScaledButton = ({
	children,
	isDanger,
	tooltip,
	className,
	withoutActiveStyle,
	disabled,
	...other
}: ScaledButtonProps) => {
	return (
		<div
			{...other}
			className={classNames(
				'group relative cursor-pointer flex items-center',
				{
					'active:scale-90': !withoutActiveStyle && !disabled,
					'hover:text-rose-500 transition': isDanger && !disabled
				},
				className
			)}
		>
			{!disabled && (
				<div
					className={classNames(
						'w-full h-full scale-0',
						'-z-10 absolute top-0 left-0',
						'absolute cursor-pointer rounded-lg transition duration-75',
						'group-hover:scale-100',
						isDanger ? 'group-hover:bg-rose-100' : 'group-hover:bg-gray-100'
					)}
				></div>
			)}
			{tooltip && (
				<div
					className={classNames(
						'opacity-0 group-hover:opacity-100',
						'absolute bottom-full',
						'bg-gray-950 p-2 text-xs text-white rounded-xl',
						'scale-0 group-hover:scale-100 transition',
						'select-none pointer-events-none'
					)}
				>
					{tooltip}
				</div>
			)}
			{children}
		</div>
	)
}

export default ScaledButton
