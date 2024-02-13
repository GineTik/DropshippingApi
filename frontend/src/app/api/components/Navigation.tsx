import RouteConstants from '../../../../constants/RouteConstants'
import ListLink from './list-link/ListLink'

const ApiNavigation = () => {
	return (
		<div className="text-sm md:min-w-[250px] max-md:w-full md:sticky top-3">
			<h5 className="mx-3 mt-3 mb-2">Основне</h5>
			<ListLink href={RouteConstants.Api.Introduction}>Вступ</ListLink>
			<ListLink href={RouteConstants.Api.HowItWorks}>Як це працює</ListLink>
			<ListLink href={RouteConstants.Api.Filtration}>Фільтрація</ListLink>
			<ListLink href={RouteConstants.Api.Errors}>Можливі помилки</ListLink>

			<h5 className="mx-3 mt-3 mb-2">Кінцеві точки</h5>
			<ListLink href={RouteConstants.Api.GetFilteredOffers}>
				Відфільтровані пропозиції
			</ListLink>
			<ListLink href={RouteConstants.Api.GetOneOffer}>
				Отримати пропозицію
			</ListLink>
			<ListLink href={RouteConstants.Api.SendOrder}>
				Надіслати замовлення
			</ListLink>
			<ListLink href={RouteConstants.Api.DataExtract}>
				Отримати вижимку даних
			</ListLink>

			<h5 className="mx-3 mt-3 mb-2">Особливості роботи з</h5>
			<ListLink href="#">MS DROP</ListLink>
			<ListLink href="#">Zima</ListLink>
			<ListLink href="#">Web Sklad</ListLink>
		</div>
	)
}

export default ApiNavigation
