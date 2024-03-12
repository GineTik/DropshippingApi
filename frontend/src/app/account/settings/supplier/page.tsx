'use client'
import styles from '@/components/inputs/Input.module.scss'
import { useActions } from '@/hooks/useActions'
import { SupplierService } from '@/services/user/supplier.service'
import { StateType } from '@/store/store'
import { useSelector } from 'react-redux'
import Setting from "../../components/settings/Setting"

const SupplierSettings = () => {

  const { changePublicName, changeApiNameName, changeDescription, changeYmlType, changeYmlCatalogUrl, changeYmlCatalogRefreshTime } = useActions()
  const settings = useSelector((state: StateType) => state.supplier)

  return (
    <div>
      <Setting title="Змінити публічне ім'я" buttonText="Змінити" sendRequest={() => SupplierService.changePublicName(settings.publicName)}>
        <input className={styles.input} value={settings.publicName} onChange={(e) => changePublicName(e.target.value)} />
      </Setting>
      <Setting title="Змінити апі ім'я" buttonText="Змінити" sendRequest={() => SupplierService.changeApiName(settings.apiName)}>
        <input className={styles.input} value={settings.apiName} onChange={(e) => changeApiNameName(e.target.value)} />
      </Setting>
      <Setting title="Змінити опис" buttonText="Змінити" sendRequest={() => SupplierService.changeDescription(settings.description)}>
        <input className={styles.input} value={settings.description} onChange={(e) => changeDescription(e.target.value)} />
      </Setting>
      <Setting title="Змінити тип загрузки yml файла" buttonText="Змінити" sendRequest={() => SupplierService.changeYmlType(settings.ymlType)}>
        <select onChange={(e) => changeYmlType(e.target.value as 'file' | 'link')}>
          <option value={'file'}>Файл</option>
          <option value={'link'}>Силка</option>
        </select>
      </Setting>
      {settings.ymlType === 'link' && <>
        <Setting title="Змінити силку та частоту оновлення yml каталогу" buttonText="Змінити" sendRequest={() => SupplierService.changeYmlCatalogLink(settings.ymlCatalogLink)}>
          <input className={styles.input} value={settings.ymlCatalogLink?.url} onChange={(e) => changeYmlCatalogUrl(e.target.value)} />
          <select onChange={(e) => changeYmlCatalogRefreshTime(e.target.value)}>
            {['5m', '10m', '30m', '1h', '3h', '12h', '1d'].map(time => <>
              <option value={time}>{time}</option>
            </>)}
          </select>
        </Setting>
      </>}
    </div>
  )
}

export default SupplierSettings
