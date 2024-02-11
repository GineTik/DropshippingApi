import H5 from '@/components/headings/H5'
import RouteConstants from '../../../../constants/RouteConstants'
import ListLink from './ListLink'

const ApiNavigation = () => {
	return (
		<div className="text-sm md:min-w-[250px] max-md:w-full md:sticky top-3">
			<H5 className="mx-3 mt-3 mb-2">Основне</H5>
			<ListLink href={RouteConstants.Api.Introduction}>Вступ</ListLink>
			<ListLink href={RouteConstants.Api.HowItWorks}>Як це працює</ListLink>
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
	)
}

export default ApiNavigation
