import { Code } from "@/app/api/components/code/Code"
import { Buttons } from "@/components/buttons"
import Section from "@/components/section/Section"
import { SupplierSettings } from "@/dtos/user/settings/supplier-settings.dto"
import { MoveLeft } from "lucide-react"
import styles from "./Api.module.scss"

const Api = (supplier: SupplierSettings) => {
  return (
    <div className={styles.wrapper}>
      <Section className={styles.section}>
        <div>
          	<Code.Object className={styles.section__code} object={supplier} />
        </div>
        <div>
          	<h2 className={styles.section__title}>АПІ - як <span className={styles.title__emphasis}>інтегрувати</span> товари у ваш інтернет-магазин?</h2>
            <p className={styles.section__p}>Використовуючи кінцеві точки нашого АПІ ви можете отримувати товари відсортованими та за потрібними вам фільтрами.</p>
            <p className={styles.section__fields}><MoveLeft strokeWidth={1} /> Поля товара цього поставщика</p>
            <Buttons.PrimaryDark>Детальніше</Buttons.PrimaryDark>
        </div>
      </Section>
    </div>
  )
}

export default Api
