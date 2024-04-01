'use client'
import Section from "@/components/section/Section"
import { SupplierSettings } from "@/dtos/user/settings/supplier-settings.dto"
import styles from "./SupplierProfile.module.scss"

const SupplierProfile = (supplier: SupplierSettings) => {
  return (
    <Section>
      <div className={styles.supplier_header}>
        <span className={styles.supplier_name_title}>public name:</span> {supplier.publicName} <br/> 
        <span className={styles.supplier_name_title}>api name:</span> {supplier.apiName}
      </div>
      {supplier.description ? <div className={styles.supplier_description}>{supplier.description}</div> : <></>}
    </Section>
  )
}

export default SupplierProfile
