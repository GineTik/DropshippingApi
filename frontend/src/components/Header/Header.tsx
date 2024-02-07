import RouteConstants from '@/../constants/RouteConstants'
import Logo from '@/../public/logo.svg'
import Section from '@/components/Section/Section'
import Image from 'next/image'
import Link from 'next/link'
import HeaderAuthentication from './HeaderAuthentication'

const Header = () => {
	return (
		<Section className="flex mt-5 items-center z-50">
			<Link href={RouteConstants.Home}>
				<Image src={Logo.src} alt="Logo" width={40} height={40} />
			</Link>
			<div className="ml-10 flex items-center max-sm:hidden">
				<Link href={RouteConstants.Api} className="hover:scale-110 transition">
					Документація
				</Link>
			</div>
			<div className="ml-auto">
				<HeaderAuthentication />
			</div>
		</Section>
	)
}

export default Header
