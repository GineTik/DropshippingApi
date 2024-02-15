import ApiSection from '@/app/api/components/section/ApiSection'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'
import ApiEndpointsConstants from '../../../../../../constants/ApiEndpointsConstants'
import RouteConstants from '../../../../../../constants/RouteConstants'
import { Code } from '../../../components/code/Code'

const GetFilteredOffersPage = () => {
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
				updatedAt: new Date(Date.now()).toLocaleDateString('ua-UK'),
				fields: {
					'залежить від постачальника': '...'
				},
				images: ['силки...']
			}
		]
	}

	const errorFields = {
		status: 400,
		message: 'Якась помилка'
	}

	const example2Offer = {
		id: 1,
		title: 'Якийсь товар',
		fields: {
			categories: [],
			orders: 999
		},
		images: []
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

				<h2 className="pt-4">Отримати список товарів</h2>

				<ApiSection>
					<p>
						Для отримання усіх товарів від якогось поставщика ви можете
						використовувати наступну кінцеву точку.
					</p>
					<Code.Curl
						{...ApiEndpointsConstants.GetFilteredOffers}
						headers={ApiEndpointsConstants.AuthHeaders}
					/>
				</ApiSection>

				<ApiSection>
					<h4 className="pt-3">Відповіді</h4>
					<p>
						Успішний результат, який повернеться буде наступного вигляду (поля
						об'єкта <Code.String>fields</Code.String> довільні, в залежності від
						постачальника, детальніше про достовірні поля можна взнати зліва в
						розділі "Особливості роботи з")
					</p>

					<Code.Object object={typeOfResult} />

					<p>При помилці, результат буде вигляду</p>

					<Code.Object object={errorFields} />
				</ApiSection>

				<ApiSection>
					<h4 className="pt-3">Приклади #1</h4>
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
						<Code.String>title</Code.String> з типом порівняння{' '}
						<Code.String>[$contains]</Code.String>, як вже було сказано, ми
						отримаємо усі пропозиції, які містять слово "аксесуар" в назві. При
						цьому регістр значення не має.
					</p>
				</ApiSection>

				<ApiSection>
					<h4 className="pt-3">Приклади #2</h4>
					<p>
						Отримати 5 товарів з категорії ялинок, для секції "популярні
						товари".
					</p>
					<p>Уявимо, що маємо наступну структуру товара.</p>
					<Code.Object object={example2Offer} />

					<p>
						Для такого запиту потрібно додати до запиту декілька параметрів для
						фільтрації, а саме: для фільтрації по категоріям, сортування за
						кількістю замовлень та кількістю товарів в результаті.
					</p>
					<p>Давайте виконаємо такий запит:</p>
					<Code.Curl
						{...ApiEndpointsConstants.GetFilteredOffers}
						headers={ApiEndpointsConstants.AuthHeaders}
						parameters={{
							'fields.categories.$any[$equal]': 'christmas-tree',
							'fields.orders[$order]': -1,
							pageCount: '5'
						}}
					/>
					<p>
						У результаті ми отримаємо першу сторінку величиною в 5 товарів набір
						товарів з категорією "Christmas-tree", відсортованою за полем
						"orders" та{' '}
					</p>
					<p>
						У цьому прикладі ми фільтруємо за полем{' '}
						<Code.String>title</Code.String> з типом порівняння{' '}
						<Code.String>[$contains]</Code.String>, як вже було сказано, ми
						отримаємо усі пропозиції, які містять слово "аксесуар" в назві. При
						цьому регістр значення не має.
					</p>
				</ApiSection>
			</div>
		</div>
	)
}

export default GetFilteredOffersPage
