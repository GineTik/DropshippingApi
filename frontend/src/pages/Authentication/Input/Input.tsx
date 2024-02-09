'use client'
import classNames from 'classnames'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	// register: any
}

const StyledInput = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...other }, ref) => {
		return (
			<input
				className={classNames(
					'border rounded-full py-3 px-6 outline-none',
					className
				)}
				ref={ref}
				{...other}
			/>
		)
	}
)

export default StyledInput
