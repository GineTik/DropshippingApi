import H4 from '@/components/Headings/H4'
import Link from 'next/link'
import ApiPageWrapper from '../ApiPageWraper'
import CodeObject from '../Code/CodeObject'
import Curl from '../Code/Curl'

const GetOneOfferPage = () => {
	const filterParameters = {
		title: 'query // about query above',
		page: 1,
		pageCount: 12,
		'something characteristic': 'query // about query above'
	}

	const result = {
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

	return (
		<ApiPageWrapper>
			<div className="space-y-3">
				<H4>Отримати один товар</H4>
				<p>
					Для отримання усіх товарів від якогось поставщика ви можете
					використовувати наступну кінцеву точку.
				</p>
				<Curl
					method="GET"
					url="https://dropshipping.api.ua/api/offers/{supplier}/one"
					headers={{
						'x-dropshipping-api-key': '{api-key}'
					}}
				/>

				<p>
					Також можна фільтрувати за кожним полем.{' '}
					<Link href="#about-query" className="text-blue-500">
						Про "query".
					</Link>
				</p>
				<CodeObject from={filterParameters} />

				<p>Структура результату:</p>
				<CodeObject from={result} />
			</div>
		</ApiPageWrapper>
	)
}

export default GetOneOfferPage
