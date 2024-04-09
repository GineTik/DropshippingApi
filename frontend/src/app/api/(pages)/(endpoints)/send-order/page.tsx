import { Code } from '@/app/api/components/code/Code'
import ApiSection from '@/app/api/components/section/ApiSection'
import ApiEndpointsConstants from '../../../../../../constants/ApiEndpointsConstants'

const SendOrderPage = () => {
	const bodyOfSendOrderRequest = {
		customer: {
			name: "ім'я",
			email: 'пошта',
			phone: 'номер',
			deliveryAddress: 'адреса доставки',
			additionalInformation: {
				'ваші поля': 'ваші дані'
			}
		},
		offers: [
			{
				offerId: 'id',
				amount: 10
			}
		]
	}

	return (
		<>
			<h2>Надіслати замовлення в кабінет</h2>
			<ApiSection>
				<p>
					Щоб надіслати замовлення вашого клієнта в ваш кабінет, ви можете
					використовувати наступну ключову точку
				</p>
				<Code.Curl
					{...ApiEndpointsConstants.SendOrders}
					headers={ApiEndpointsConstants.AuthHeaders}
				/>
				<p>Дані, які ви маєте надіслати наступні:</p>
				<Code.Object object={bodyOfSendOrderRequest} />
			</ApiSection>
		</>
	)
}

export default SendOrderPage
