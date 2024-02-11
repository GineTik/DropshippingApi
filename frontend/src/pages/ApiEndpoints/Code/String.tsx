import classNames from 'classnames'

interface CodeStringProps {
	children: string | string[]
	className?: string
	withoutPadding?: boolean
}

const CodeString = ({
	children,
	className,
	withoutPadding
}: CodeStringProps) => {
	return (
		<span
			className={classNames(
				'text-green-500 bg-gray-800 rounded-lg',
				{ 'px-2 py-1': !withoutPadding },
				className
			)}
		>
			"{children}"
		</span>
	)
}

export default CodeString
