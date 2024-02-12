import ApiSection from '@/app/api/components/section/ApiSection'
import Link from 'next/link'
import ApiEndpointsConstants from '../../../../../../constants/ApiEndpointsConstants'
import RouteConstants from '../../../../../../constants/RouteConstants'
import { Code } from '../../../components/code/Code'

const GetOneOfferPage = () => {
	const result = {
		id: 1,
		title: 'Найкращий сайт від нас',
		updatedAt: new Date(Date.now()).toLocaleDateString('ua-UK'),
		fields: {
			'залежить від постачальника': '...'
		},
		images: ['силки...']
	}

	const failedResult = {
		statusCode: 400,
		code: 'OfferNotFound',
		message: 'Offer not found with current filters'
	}

	return (
		<>
			<ApiSection>
				<h2>Отримати один товар</h2>
				<p>Щоб отримати один товар, ви можете</p>
				<Code.Curl
					{...ApiEndpointsConstants.GetOneOffer}
					headers={ApiEndpointsConstants.AuthHeaders}
				/>
			</ApiSection>

			<ApiSection>
				<h3>Відповіді</h3>
				<p>
					Якщо за вказаними фільтрами знайдеться товар, то структура успішного
					результату буде наступна:
				</p>
				<Code.Object object={result} />

				<p>
					Якщо відповідних товарів не буде найдено, тоді повернеться наступний
					результат:
				</p>
				<Code.Object object={failedResult} />
			</ApiSection>

			<ApiSection>
				<h4 className="pt-3">Приклади #1</h4>
				<p>
					Отримати товар по id{' '}
					<Link
						href={RouteConstants.Api.Filtration}
						className="font-medium text-blue-600"
					>
						(детальніше про фільтрацію)
					</Link>
					.
				</p>
				<Code.Curl
					{...ApiEndpointsConstants.GetFilteredOffers}
					headers={ApiEndpointsConstants.AuthHeaders}
					parameters={{
						'id[$equal]': 1
					}}
				/>
				<p>
					Отримаємо товар з id рівним одному. Така фільтрація чудово підходить,
					щоб, наприклад, вивести сторінку з товаром.
				</p>
			</ApiSection>

			<ApiSection>
				<h4 className="pt-3">Приклади #2</h4>
				<p>
					Дістати перший найдешевший товар{' '}
					<Link
						href={RouteConstants.Api.Filtration}
						className="font-medium text-blue-600"
					>
						(детальніше про фільтрацію)
					</Link>
					.
				</p>
				<Code.Curl
					{...ApiEndpointsConstants.GetFilteredOffers}
					headers={ApiEndpointsConstants.AuthHeaders}
					parameters={{
						'fields.price[$order]': 1
					}}
				/>
				<p>
					Результат відомий, тут ми сортуємо на зростання (від дешевшого до
					дорожчого) та отримуємо перший товар, тобто найдешевший.
				</p>
			</ApiSection>
		</>
	)
}

export default GetOneOfferPage
