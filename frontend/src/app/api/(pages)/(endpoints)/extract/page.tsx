import { Code } from '@/app/api/components/code/Code'
import ListOfFields from '@/app/api/components/code/ListOfFields'
import ApiSection from '@/app/api/components/section/ApiSection'
import ApiEndpointsConstants from '../../../../../../constants/ApiEndpointsConstants'

const DataExtract = () => {
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
					{...ApiEndpointsConstants.GetExtract}
					headers={ApiEndpointsConstants.AuthHeaders}
				/>

				<p>
					Можливі значення <Code.String>operation</Code.String> можуть бути
					наступні:
				</p>
				<ListOfFields fields={possibleValuesOfOperation} />

				<p>
					Ви також можете передавати поле масиву, вказуючи значення (символ{' '}
					<Code.String>$</Code.String>), наприклад{' '}
					<Code.String>fields.categories.$</Code.String>. У цьому випадку вам
					потрібно дивитись на тип, який мають значення масиву. Якщо в масиві
					знаходяться об'єкти, то ви можете зробити вижимку по ним наступним
					чином -{' '}
					<Code.String>fields.categories.$.fieldOfArrayItem</Code.String>
				</p>
			</ApiSection>

			<ApiSection>
				<h3>Відповіді</h3>
				<p>
					Для різних операцій будуть різні відповіді. Для{' '}
					<Code.String>min</Code.String> та <Code.String>max</Code.String>{' '}
					повернеться число або дата (дата, як рядок у форматі dd.mm.yyyy), для{' '}
					<Code.String>range</Code.String> - обьект з min та max полями, для
					<Code.String>list</Code.String> повернеться масив значень (числа, дати
					чи строки в залежності від типу поля).
				</p>
			</ApiSection>

			<ApiSection>
				<h4 className="pt-3">Приклади #1</h4>
				<p>Отримати діапазон цін</p>
				<Code.Curl
					{...ApiEndpointsConstants.GetExtractWithParams(
						'fields.price',
						'range'
					)}
					headers={ApiEndpointsConstants.AuthHeaders}
				/>
				<p>
					У цьому прикладі ми дістаємо максимальне та мінімальне значення ціни
					для усіх товарів (так як ніяк не фільтрували товари). При цьому
					результат буде наступним:
				</p>
				<Code.Object object={{ min: 100, max: 15000 }} />
			</ApiSection>

			<ApiSection>
				<h4 className="pt-3">Приклади #2</h4>
				<p>Отримати можливі розміри для дитячого одягу</p>
				<Code.Curl
					{...ApiEndpointsConstants.GetExtractWithParams(
						'fields.sizes',
						'list'
					)}
					headers={ApiEndpointsConstants.AuthHeaders}
					parameters={{
						'fields.categories.$any': 'дитяча одежа'
					}}
				/>
				<p>Тут розміри зберігаються в вигляді рядків. А ось і результат:</p>
				<Code.Object object={['розмір 1', 'розмір 2', 'розмір 3']} />
			</ApiSection>
		</>
	)
}

export default DataExtract
