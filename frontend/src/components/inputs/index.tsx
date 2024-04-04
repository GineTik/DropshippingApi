import BaseInput, { BaseInputProps } from "./BaseInput";
import styles from './Input.module.scss';

export const Inputs = {
    Default: (props: BaseInputProps) => {
        return <BaseInput 
            {...props} 
            className={`${styles.input} ${props.className}`}
        />
    }
}