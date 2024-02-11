import classNames from 'classnames'
import React from 'react'

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: string | string[]
}

const H3 = ({ children, ...props }: H3Props) => {
	return (
		<h3
			{...props}
			className={classNames(
				'text-gray-800 font-bold text-xl md:text-2xl leading-snug',
				props.className
			)}
		>
			{children}
		</h3>
	)
}

export default H3
