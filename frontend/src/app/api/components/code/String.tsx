import classNames from 'classnames'

interface CodeStringProps {
	children: string | string[]
	className?: string
	withoutPadding?: boolean
	isDark?: boolean
}

const CodeString = ({
	children,
	className,
	withoutPadding,
	isDark
}: CodeStringProps) => {
	return (
		<code
			className={classNames(
				'text-nowrap',
				{
					'px-2 py-1': !withoutPadding,
					'text-green-500 bg-gray-800 rounded-lg': isDark,
					'text-green-800 border rounded-lg': !isDark
				},
				className
			)}
		>
			"{children}"
		</code>
	)
}

export default CodeString