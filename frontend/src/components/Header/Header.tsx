'use client'
import RouteConstants from '@/../constants/RouteConstants'
import Logo from '@/../public/logo.svg'
import Section from '@/components/section/Section'
import { pageInDeveloping } from '@/helpers/ToastHelper'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'
import HeaderAuthentication from './HeaderAuthentication'

const Header = () => {
	return (
		<Section className={styles.header}>
			<Link href={RouteConstants.Home}>
				<Image src={Logo.src} alt="Logo" width={40} height={40} />
			</Link>
			<div>
				<Link
					href={RouteConstants.Api.Introduction}
					className={styles.header_link}
				>
					Документація
				</Link>
				<Link
					href={RouteConstants.Suppliers}
					className={styles.header_link}
				>
					Поставщики
				</Link>
				<span
					onClick={() => pageInDeveloping("Про нас")}
					className={styles.header_link}
				>
					Про нас
				</span>
			</div>
			<div className="flex items-center gap-2 ml-auto">
				<HeaderAuthentication />
			</div>
		</Section>
	)
}

export default Header
