import H3 from '@/components/headings/H3'
import H4 from '@/components/headings/H4'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'
import ApiEndpointsConstants from '../../../../../../constants/ApiEndpointsConstants'
import RouteConstants from '../../../../../../constants/RouteConstants'
import { Code } from '../../../components/code/Code'

const GetFilteredOffersPage = () => {
	const availableParameters = {
		'{field}':
			'Приймає вираз для фільтрації, замість {field} може бути любе поле',
		page: 1,
		pageCount: 12,
		'[some characteristic]': 'query // about query below'
	}

	const typeOfResult = {
		metadata: {
			page: 1,
			pageCount: 12,
			totalPage: 55,
			totalOffers: 12 * 55
		},
		offers: [
			{
				id: 1,
				title: 'Найкращий сайт від нас',
				fields: {
					description: 'Опис цього продукту',
					categories: [],
					tags: [],
					price: 10000,
					currency: 'ua',
					currencySymbol: '₴'
				},
				images: ['url', 'url', 'url']
			}
		]
	}

	const errorFields = {
		status: 400,
		message: 'Якась помилка'
	}

	return (
		<div>
			<div className="space-y-3">
				<div className="flex gap-3 p-4 bg-orange-100 border border-orange-400 rounded-xl">
					<AlertCircle size={24} className="text-orange-500" />
					<div className="text-sm">
						Якщо ще не ознайомились з статтями зліва в групі "Основне",
						рекомендуємо це зробити, щоб повністю розуміти те, що нижче.
					</div>
				</div>
				<H3>Отримати список товарів товари</H3>
				<p>
					Для отримання усіх товарів від якогось поставщика ви можете
					використовувати наступну кінцеву точку.
				</p>
				<Code.Curl
					{...ApiEndpointsConstants.GetFilteredOffers}
					headers={ApiEndpointsConstants.AuthHeaders}
				/>

				<H4 className="pt-3">Відповіді</H4>
				<p>
					Успішний результат, який повернеться буде наступного вигляду (поля
					об'єкта <Code.String>fields</Code.String> довільні і можуть бути
					іншими, в залежності від поставщика, детальніше про достовірні поля
					можна взнати зліва в розділі "Особливості роботи з")
				</p>

				<Code.Object object={typeOfResult} />

				<p>При помилці, результат буде вигляду</p>

				<Code.Object object={errorFields} />

				<H4 className="pt-3">Приклади #1</H4>
				<p>
					Отримати усі товари, які в імені мають слово "аксесуар"{' '}
					<Link
						href={RouteConstants.Api.Filtration}
						className="font-medium text-blue-600"
					>
						(детальніше про фільтрацію)
					</Link>
				</p>
				<Code.Curl
					{...ApiEndpointsConstants.GetFilteredOffers}
					headers={ApiEndpointsConstants.AuthHeaders}
					parameters={{
						'title[$contains]': 'аксесуар'
					}}
				/>
				<p>
					У цьому прикладі ми фільтруємо за полем{' '}
					<Code.String>title</Code.String> з режимом{' '}
					<Code.String>[$contains]</Code.String>, як вже було сказано, ми
					отримаємо усі пропозиції, які містять слово "аксесуар" в назві.
				</p>
			</div>
		</div>
	)
}

export default GetFilteredOffersPage
