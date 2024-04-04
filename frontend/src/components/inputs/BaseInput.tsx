'use client'
import { InputHTMLAttributes } from 'react'

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
	
}

const BaseInput = (props: BaseInputProps) => {
	return <input {...props} />
}

// const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
// 	({ className, ...other }, ref) => {
// 		return (
// 			<input
// 				className={classNames(
// 					styles.input,
// 					className
// 				)}
// 				ref={ref}
// 				{...other}
// 			/>
// 		)
// 	}
// )

export default BaseInput
