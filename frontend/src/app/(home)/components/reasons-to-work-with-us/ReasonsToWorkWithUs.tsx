import { Blocks } from '@/components/blocks'
import Section from '@/components/section/Section'
import styles from './ReasonsToWorkWithUs.module.scss'

const ReasonsToWorkWithUs = () => {
  return (
    <Section className={styles.section}>
        <div className={styles.section__first}>
            <h2 className={styles.section__title}><span className={styles.section__emphasis}>4 причини</span> працювати з нами</h2>
            <div className={styles.section__row}>
                <Blocks.Wrapper>
                    <Blocks.Icon />
                    <Blocks.Title>
                        Вигрузка товарів у різних форматах
                    </Blocks.Title>
                    <Blocks.Text>
                        Вигружайте відфільтровані товари в різних форматах за одну хвилину
                    </Blocks.Text>
                </Blocks.Wrapper>
                <Blocks.Wrapper emphasis>
                    <Blocks.Icon />
                    <Blocks.Title>
                        Інтеграція у ваш інтернет-магазин
                    </Blocks.Title>
                    <Blocks.Text>
                        Використовуй апі та отримуй завжди актуальні товари.  Використовуй нас навіть замість сервера!
                    </Blocks.Text>
                </Blocks.Wrapper>
            </div>
        </div>
        <div className={styles.section__second}>
            <div className={styles.section__col}>
                <Blocks.Wrapper emphasis>
                    <Blocks.Icon />
                    <Blocks.Title>
                        Великий вибір різноманітних товарів
                    </Blocks.Title>
                    <Blocks.Text>
                        Каталог нескінчених товарів любої потрібної вам категорії
                    </Blocks.Text>
                </Blocks.Wrapper>
                <Blocks.Wrapper>
                    <Blocks.Icon />
                    <Blocks.Title>
                        Постійна підтримка щодо ваших питань
                    </Blocks.Title>
                    <Blocks.Text>
                        Наші менеджери допоможуть вам вирішити питання щодо  товарів, поставщиків, апі та тому подібному.
                    </Blocks.Text>
                </Blocks.Wrapper>
            </div>
            <div className='xl:block hidden'>
                <Blocks.Banner />
            </div>
        </div>
    </Section>
  )
}

export default ReasonsToWorkWithUs
