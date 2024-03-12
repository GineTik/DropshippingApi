'use client'
import classNames from 'classnames'
import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	// register: any
}

const StyledInput = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...other }, ref) => {
		return (
			<input
				className={classNames(
					styles.input,
					className
				)}
				ref={ref}
				{...other}
			/>
		)
	}
)

export default StyledInput
