import H3 from '@/components/Headings/H3'
import ApiPageWrapper from '../ApiPageWraper'
import Curl from '../Code/Curl'

const FiltrationPage = () => {
	const method = 'GET'
	const url = 'https://dropshipping.api.ua/api/offers/{supplier}/filtered'
	const headers = {
		'x-dropshipping-api-key': '{api-key}'
	}

	return (
		<ApiPageWrapper>
			<H3 className="pt-3">Фільтрування</H3>
			<p>
				Фільтрування може відбуватись за любим полем об'єкта пропозиції. Для
				цього потрібно додати параметри в запит, це буде виглядати наступним
				чином
			</p>
			<Curl
				method={method}
				url={url}
				headers={headers}
				parameters={{
					'field[$eq]': 'something',
					'field2.number[$min]': '10'
				}}
			/>
			<p>В параметрах ви можете побачити</p>
		</ApiPageWrapper>
	)
}

export default FiltrationPage
