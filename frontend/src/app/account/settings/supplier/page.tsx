'use client'
import styles from '@/components/inputs/Input.module.scss'
import { useActions } from '@/hooks/useActions'
import { SupplierService } from '@/services/user/supplier.service'
import { StateType } from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useSelector } from 'react-redux'
import Setting from "../../components/settings/Setting"

const SupplierSettings = () => {

  const { changePublicName, changeApiNameName, changeDescription, changeYmlType, changeYmlCatalogUrl, changeYmlCatalogRefreshTime } = useActions()
  const settings = useSelector((state: StateType) => state.auth.user.supplierSettings)

  const { data: availableRefreshTimes } = useQuery<AxiosResponse<{id: number, name: string}[]>>({
    queryKey: ['available-refresh-times'],
    queryFn: () => SupplierService.getAvailableRefreshTimes()
  })

  const { data: availableYmlLoadTypes } = useQuery<AxiosResponse<string[]>>({
    queryKey: ['available-yml-load-types'],
    queryFn: () => SupplierService.getAvailableYmlLoadTypes()
  })

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
      <Setting title="Змінити тип загрузки yml файла" buttonText="Змінити" sendRequest={() => SupplierService.changeYmlType(settings.ymlLoadType)}>
        <select onChange={(e) => changeYmlType(e.target.value)}>
          {availableYmlLoadTypes?.data.map((type: any) => 
            <option selected={type === settings.ymlLoadType} value={type}>{type}</option>
          )}
        </select>
      </Setting>
      {settings.ymlLoadType.toLowerCase() === 'link' && <>
        <Setting title="Змінити силку та частоту оновлення yml каталогу" buttonText="Змінити" sendRequest={() => SupplierService.changeYmlCatalogLink({ link: settings.ymlLink, refreshTimeId: settings.refreshTimeId })}>
          <input className={styles.input} value={settings.ymlLink} onChange={(e) => changeYmlCatalogUrl(e.target.value)} />
          <select onChange={(e) => changeYmlCatalogRefreshTime(Number(e.target.value))}>
            {availableRefreshTimes?.data.map((time: any) => <>
              <option selected={time.id === settings.refreshTimeId} value={time.id}>{time.name}</option>
            </>)}
          </select>
        </Setting>
      </>}
    </div>
  )
}

export default SupplierSettings
