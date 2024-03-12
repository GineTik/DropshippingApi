'use client'

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
        <Setting title='Зміна паролю' buttonText='Змінити пароль' sendRequest={() =>    AuthService.confirmChangePassword({
				code: Number(data.code),
				newPassword: data.password
			})}>
            <input className={styles.input} onChange={(e) => setData({ ...data, password: e.target.value})} placeholder='Новий пароль' value={data.password} />
            <input className={styles.input} type='number' onChange={(e) => setData({ ...data, code: e.target.value})} placeholder='Код для підтвердження' value={data.code} />
        </Setting>
    </div>
  )
}

export default SettingsSecurity
