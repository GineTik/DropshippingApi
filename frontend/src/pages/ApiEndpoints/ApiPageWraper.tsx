import H5 from '@/components/Headings/H5'
import Section from '@/components/Section/Section'
import RouteConstants from '../../../constants/RouteConstants'
import ListLink from './Components/ListLink'

interface ApiPageWrapperProps {
	children: any
}

const ApiPageWrapper = ({ children }: ApiPageWrapperProps) => {
	return (
		<Section className="flex flex-col md:flex-row gap-10 pt-6 pb-6 md:pt-20 md:pb-20 justify-center items-start w-full relative">
			<div className="text-sm md:min-w-[250px] max-md:w-full md:sticky top-3">
				<H5 className="mx-3 mt-3 mb-2">Основне</H5>
				<ListLink href={RouteConstants.Api.Introduction}>Вступ</ListLink>
				<ListLink href={RouteConstants.Api.HowItWorks}>Як це працює?</ListLink>
				<ListLink href={RouteConstants.Api.Filtration}>Фільтрація</ListLink>

				<H5 className="mx-3 mt-3 mb-2">Кінцеві точки</H5>
				<ListLink href={RouteConstants.Api.GetFilteredOffers}>
					Відфільтровані пропозиції
				</ListLink>
				<ListLink href={RouteConstants.Api.GetOneOffer}>
					Отримати пропозицію
				</ListLink>
				<ListLink href="#">Надіслати замовлення</ListLink>

				<H5 className="mx-3 mt-3 mb-2">Особливості роботи з</H5>
				<ListLink href="#">MS DROP</ListLink>
				<ListLink href="#">Zima</ListLink>
				<ListLink href="#">Web Sklad</ListLink>
			</div>
			<div className="w-full max-w-[800px] space-y-3">{children}</div>
		</Section>
	)
}

export default ApiPageWrapper
