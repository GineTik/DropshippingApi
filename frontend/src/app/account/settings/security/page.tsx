'use client'

import { Inputs } from '@/components/inputs'
import styles from '@/components/inputs/Input.module.scss'
import { AuthService } from '@/services/auth.service'
import { useState } from 'react'
import Setting from "../../components/settings/Setting"

const SettingsSecurity = () => {
    const [data, setData] = useState({
        code: '',
        password: ''
    })

  return (
    <div>
        <Setting title='Зміна паролю' buttonText='Змінити' sendRequest={() => AuthService.confirmChangePassword({
				code: Number(data.code),
				newPassword: data.password
			})}>
            <Inputs.Default 
				className={styles.input} 
				onChange={(e) => setData({ ...data, password: e.target.value})} 
				placeholder='Новий пароль' 
				value={data.password} 
            />
        </Setting>
    </div>
  )
}

export default SettingsSecurity
