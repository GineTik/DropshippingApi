'use client'
import { InputHTMLAttributes } from 'react'

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
	
}

const BaseInput = (props: BaseInputProps) => {
	return <input {...props} />
}

export default BaseInput
