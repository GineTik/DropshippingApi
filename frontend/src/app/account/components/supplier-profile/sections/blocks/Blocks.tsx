import { Buttons } from "@/components/buttons"
import Section from "@/components/section/Section"
import { SupplierSettings } from "@/dtos/user/settings/supplier-settings.dto"
import { functionalInDeveloping } from "@/helpers/ToastHelper"
import { FileCog, Send } from "lucide-react"
import styles from './Blocks.module.scss'

const Blocks = (supplier: SupplierSettings) => {
  return (
    <Section className={styles.section}>
        <div className={styles.section__block}>
            <div className={styles.section__icon}>
                <Send size={40} />
            </div>
          	<h2 className={styles.section__title}>Маєте якісь <span className={styles.title__emphasis}>питання</span> до нас?</h2>
			<p className={styles.section__p}>Якщо ви хочете задати питання, ви можете це зробити використовуючи почту, або написавши нам, натиснувши кнопку нижче.</p>
            <Buttons.Present 
                className={styles.section__button}
                onClick={() => functionalInDeveloping('Написати питання')}
            >
                Написати питання
            </Buttons.Present>
        </div>
        <div className={styles.section__block}>
            <div className={styles.section__icon}>
                <FileCog size={40} />
            </div>
            <h2 className={styles.section__title}>Є <span className={styles. title__emphasis}>претензії</span> до нас або поставщика?</h2>
			<p className={styles.section__p}>Ви можете надати нам свою претензію. Ми обробимо її та надішлемо вам відповідь найближчим часом!</p>
            <Buttons.Present 
                className={styles.section__button}
                onClick={() => functionalInDeveloping('Написати питання')}
            >
                Написати питання
            </Buttons.Present>
        </div>
      </Section>
  )
}

export default Blocks
