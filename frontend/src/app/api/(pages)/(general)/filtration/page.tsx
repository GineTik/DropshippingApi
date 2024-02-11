import ApiEndpointsConstants from '@/../constants/ApiEndpointsConstants'
import H3 from '@/components/Headings/H3'
import { Code } from '../../../components/code/Code'

const FiltrationPage = () => {
	return (
		<>
			<H3>Фільтрування</H3>
			<p>
				Фільтрування може відбуватись за любим полем об'єкта пропозиції. Для
				цього потрібно додати параметри в запит, це буде виглядати наступним
				чином
			</p>
			<Code.Curl
				{...ApiEndpointsConstants.GetFilteredOffers}
				headers={ApiEndpointsConstants.AuthHeaders}
				parameters={{
					'field[$eq]': 'something',
					'field2.number[$min]': '10'
				}}
			/>
			<p>В параметрах ви можете побачити</p>
		</>
	)
}

export default FiltrationPage
