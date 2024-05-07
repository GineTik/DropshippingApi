'use client'

import { Inputs } from '@/components/inputs'
import { useState } from 'react'
import Setting from "../../components/settings/Setting"

const SettingsSecurity = () => {
    const [data, setData] = useState({
        code: '',
        password: ''
    })

	return (
		<div>
			<Setting title='Зміна паролю' buttonText='Змінити' inDeveloping>
				<Inputs.Default 
					onChange={(e) => setData({ ...data, password: e.target.value})} 
					placeholder='Новий пароль' 
					value={data.password}
				/>
			</Setting>
		</div>
	)
}

export default SettingsSecurity
