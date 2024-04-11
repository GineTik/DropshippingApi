import Image from 'next/image'
import banner_image from '../../../public/banner-image.png'
import { Buttons } from '../buttons'
import styles from './Blocks.module.scss'

const Banner = () => {
    return (
        <div className={styles.banner_white}>
            <Image className={styles.banner_white__image} src={banner_image.src} alt='banner-image' width={250} height={250} />
            <h4 className={styles.banner_white__title}>
                Маєте <span className={styles.banner_white__emphasis}>питання</span> <br /> до нас по сервісу?
            </h4>
            <p className={styles.banner_white__p}>Напишіть нам ваше питання та ми відповімо вам найближчим часом</p>
            <Buttons.Banner className='mt-auto'>Написати нам</Buttons.Banner>
        </div>
    )
}

export default Banner
