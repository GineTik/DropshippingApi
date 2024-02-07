import H4 from '@/components/Headings/H4'
import Code from '../Code/Code'
import Curl from '../Code/Curl'
import CodeString from '../Code/String'

const GetRange = () => {
	const availableParameters = {
		title: 'query // about query below',
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
		orders: [
			{
				id: 'int',
				title: 'string',
				actualPrice: 'decimal',
				oldPrice: 'decimal',
				characteristics: {
					characteristic1: 'string',
					characteristic2: 'string',
					characteristic3: 'string'
				},
				images: ['path', 'path', 'path']
			}
		]
	}

	return (
		<>
			<H4>Отримати список товарів товари</H4>
			<p>
				Для отримання усіх товарів від якогось поставщика ви можете
				використовувати наступну кінцеву точку.
			</p>
			<Curl
				method="GET"
				url="https://dropshipping.api.ua/api/{supplier}/offers/all"
				headers={{
					'x-dropshipping-api-key': '{api-key}'
				}}
			/>
			<p>Параметри, які ви можете передати:</p>
			<Code from={availableParameters} />
			<p id="about-query">
				Важливо зауважити, що для значення{' '}
				<code>
					<CodeString className="px-2 py-0.5 text-nowrap">query</CodeString>
				</code>{' '}
				можна використовувати "регулярний вираз" у такому форматі: якщо поле,
				яке ви фільтруєте, має тип string, то ви можете використовувати
				наступний шаблон:{' '}
				<code>
					<CodeString className="px-2 py-0.5 text-nowrap">
						[startWith | endWith | contains | equal]:something text
					</CodeString>
				</code>
				. Якщо тип поля числовий, то шаблон буде наступним:{' '}
				<code>
					<CodeString className="px-2 py-0.5 text-nowrap">
						[min:10&max:100 | 10]
					</CodeString>
				</code>
				. Значення min та max можуть бути вказані (або обидва, або лише одне),
				або ви можете вказати конкретне числове значення для порівняння за
				допомогою equal.
			</p>
			<div>Ось вид результату, який ви можете отримати:</div>
			<Code from={typeOfResult} />
		</>
	)
}

export default GetRange
