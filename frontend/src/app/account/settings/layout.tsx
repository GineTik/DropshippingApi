'use client'
import { Buttons } from '@/components/buttons'
import Section from '@/components/section/Section'
import { pageInDeveloping } from '@/helpers/ToastHelper'
import RequireAuthMiddleware from '@/middlewares/RequireAuthMiddleware'
import { StateType } from '@/store/store'
import { Shield } from 'lucide-react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import RouteConstants from '../../../../constants/RouteConstants'
import banner_image from '../../../../public/banner-image.png'
import styles from './Settings.module.scss'

const SettingsLayout = ({children}: any) => {
    const user = useSelector((state: StateType) => state.auth.user)

	return (
        <RequireAuthMiddleware>
            <Section className={styles.settings}>
                <div className={styles.settings__header}>
                    <h3>Налаштування</h3>
                    <div className={styles.settings__tabs}>
                        <Buttons.Tab href={RouteConstants.Settings.Security}>Безпека</Buttons.Tab>
                        <Buttons.Tab onClick={() => pageInDeveloping('Платіжні дані')}>Платіжні дані</Buttons.Tab>
                        {user.supplierSettings && <Buttons.Tab href={RouteConstants.Settings.Supplier}>Дані поставщика</Buttons.Tab>}
                    </div>
                </div>
                <div className={styles.settings__content}>
                    <div>
                        {children}
                    </div>
                    <div className='flex items-end gap-4'>
                        <div className={styles.banner_blue}>
                            <div className={styles.banner_blue__icon}>
                                <Shield size={25} strokeWidth={3} />
                            </div>
                            <h4 className={styles.banner_blue__title}>Підтвердіть зміни на почті</h4>
                            <p className={styles.banner_blue__p}>
                                При зміні деяких налаштувань вам потрібно підтвердити операцію надавши код з почти 
                            </p>
                        </div>
                        <div className={styles.banner_white}>
                            <Image className={styles.banner_white__image} src={banner_image.src} alt='banner-image' width={250} height={250} />
                            <h4 className={styles.banner_white__title}>
                                Маєте <span className={styles.banner_white__emphasis}>питання</span> <br /> до нас по сервісу?
                            </h4>
                            <p className={styles.banner_white__p}>Напишіть нам ваше питання та ми відповімо вам найближчим часом</p>
                            <Buttons.Banner className='mt-auto'>Написати нам</Buttons.Banner>
                        </div>
                    </div>
                </div>
            </Section>
        </RequireAuthMiddleware>
	)
}

export default SettingsLayout
