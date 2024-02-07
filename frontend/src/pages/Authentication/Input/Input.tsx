'use client'
import classNames from 'classnames'
import { ChangeEventHandler } from 'react'

interface InputProps {
	placeholder: string
	type: string
	className?: string
	value: string
	onChange: ChangeEventHandler<any>
}

const StyledInput = ({
	placeholder,
	type,
	className,
	value,
	onChange
}: InputProps) => {
	return (
		<input
			className={classNames(
				'border rounded-full py-3 px-6 outline-none',
				className
			)}
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
		/>
	)
}

export default StyledInput
