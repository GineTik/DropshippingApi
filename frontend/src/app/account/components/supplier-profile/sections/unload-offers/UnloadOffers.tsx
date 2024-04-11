import Section from "@/components/section/Section"
import { SupplierSettings } from "@/dtos/user/settings/supplier-settings.dto"
import styles from "./UnloadOffers.module.scss"

const UnloadOffers = (supplier: SupplierSettings) => {
  return (
    <div className={styles.wrapper} id="download-offers">
      <Section className={styles.section}>
        <div className="max-w-[500px] py-10">
          	<h2 className={styles.section__title}>Викачати товари у <span className={styles.title__emphasis}>вигляді файлу</span> різних форматів</h2>
			<p className={styles.section__p}>Скачайте файл з вибраними товарами у вибраних фарматах. Після чого ви можете використовувати ці файли за вашим бажанням.</p>
        </div>
        <div></div>
      </Section>
    </div>
  )
}

export default UnloadOffers
