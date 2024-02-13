import { Code } from '@/app/api/components/code/Code'
import ListOfFields from '@/app/api/components/code/list-of-fields/ListOfFields'
import ApiSection from '@/app/api/components/section/ApiSection'
import Link from 'next/link'
import ApiEndpointsConstants from '../../../../../../constants/ApiEndpointsConstants'
import RouteConstants from '../../../../../../constants/RouteConstants'

const DataExtract = () => {
	const possibleParameters = {
		'fieldName[$extract]': 'field1[$and]field2',
		'[$operation]': 'range, min, max, list // можливі значення'
	}

	const possibleValuesOfOperation = {
		range:
			'тільки для чисел та дат, повертає максимальне та мінімальне значення',
		min: 'тільки для чисел та дат, повертає мінімальне значення',
		max: 'тільки для чисел та дат, повертає максимальне значення',
		list: 'повертає усі значення цього поля'
	}

	return (
		<>
			<h4>Вижимка даних</h4>
			<ApiSection>
				<p>
					Якщо вам потрібно отримати, наприклад, діапазон можливих значень ціни,
					або набір усіх можливих значень для поля категорії, ви можете
					використати цю кінцеву точку.
				</p>
				<Code.Curl
					{...ApiEndpointsConstants.DataExtract}
					headers={ApiEndpointsConstants.AuthHeaders}
				/>

				<p>Дані, які ви маєте надіслати наступні:</p>
				<Code.Object object={possibleParameters} />

				<p>
					Можливі значення параметру <Code.String>operation</Code.String> можуть
					бути наступні:
				</p>
				<ListOfFields fields={possibleValuesOfOperation} />

				<p>
					Щоб застосувати вижимку для поля із масивом значень ви можете
					використовувати синтаксис фільтрації, а саме{' '}
					<Code.String>fields.categories.$</Code.String> для поля{' '}
					<Code.String>field</Code.String>
				</p>
			</ApiSection>

			<ApiSection>
				<h3>Відповіді</h3>
				<p>
					Для різних операцій (параметр <Code.String>operation</Code.String>)
					будуть різні відповіді. Для <Code.String>min</Code.String> та{' '}
					<Code.String>max</Code.String> повернеться число або дата, для{' '}
					<Code.String>range</Code.String> - обьект з min та max полями, для
					<Code.String>list</Code.String> повернеться масив значень (числа, дати
					чи строки в залежності від типу поля).
				</p>
			</ApiSection>

			<ApiSection>
				<h4 className="pt-3">Приклади #1</h4>
				<p>
					Отримати діапазон цін{' '}
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

export default DataExtract
