import RouteConstants from '@/../constants/RouteConstants'
import Logo from '@/../public/logo.svg'
import Section from '@/components/section/Section'
import Image from 'next/image'
import Link from 'next/link'
import HeaderAuthentication from './HeaderAuthentication'

const Header = () => {
	return (
		<Section className="flex mt-5 items-center z-10">
			<Link href={RouteConstants.Home}>
				<Image src={Logo.src} alt="Logo" width={40} height={40} />
			</Link>
			<div className="ml-10 flex items-center max-sm:hidden gap-5">
				<Link
					href={RouteConstants.Api.Introduction}
					className="hover:scale-110 transition"
				>
					Документація
				</Link>
				<Link
					href={RouteConstants.Suppliers}
					className="hover:scale-110 transition"
				>
					Поставщики
				</Link>
			</div>
			<div className="ml-auto">
				<HeaderAuthentication />
			</div>
		</Section>
	)
}

export default Header
