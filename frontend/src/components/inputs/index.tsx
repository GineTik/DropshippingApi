import { SelectHTMLAttributes } from "react";
import BaseInput, { BaseInputProps } from "./BaseInput";
import styles from './Input.module.scss';

export const Inputs = {
    Default: (props: BaseInputProps) => {
        return <BaseInput 
            {...props} 
            className={`${styles.input} ${props.className}`}
        />
    },
    InputNonWidth: (props: BaseInputProps) => {
        return <BaseInput 
            {...props} 
            className={`${styles.input_non_width} ${props.className}`}
        />
    },
    Select: (props: SelectHTMLAttributes<HTMLSelectElement>) => {
        return <select 
            {...props}
            className={`${styles.select} ${props.className}`}
        />
    }
}