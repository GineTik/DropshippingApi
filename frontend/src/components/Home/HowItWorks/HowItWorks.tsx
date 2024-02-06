import H2 from '@/components/Common/Headings/H2'
import Section from '@/components/Common/Section/Section'
import classNames from 'classnames'
import RouteConstants from '../../../../constants/RouteConstants'
import ApiPNG from '../../../../public/Api.png'
import CheckPNG from '../../../../public/Check.png'
import ExelPNG from '../../../../public/Exel.png'
import HowItWorksItem from './HowItWorksItem'

const HowItWorks = () => {
	return (
		<div className="bg-gray-50 py-3 md:py-32">
			<Section>
				<div className="w-full max-w-[750px] mx-auto p-2 md:p-0">
					<H2 className="text-center mb-6">
						Отримуйте товари через АПІ або ж скачуюючи файл в кабінеті
					</H2>
					<span className="text-center block text-sm/normal md:text-xl/8">
						Для отримання доступних товарів, створено декілька кінцевих точок.
						Надіславши запит, АПІ поверне набір товарів. Якщо вам потрібно
						отримати набір товарів вручну, це можна зробити у вашому кабінеті в
						декількох форматах.
					</span>
				</div>
				<div className="px-2 md:px-0 mx-auto mt-3 mb-10 md:mb-16 md:mt-10">
					<div
						className={classNames(
							'w-full max-w-[1068px] h-[433px]',
							'bg-gray-300 rounded-2xl'
						)}
					></div>
				</div>
				<div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-4 lg:gap-7">
					<HowItWorksItem
						image={ApiPNG.src}
						imageSize={70}
						title="Використовуй АПІ"
						description="Посилай запити на кінцеві точки нашого АПІ та отримуй завжди актуальні товари для вашого магазину онлайн."
						href={RouteConstants.Api}
					/>
					<HowItWorksItem
						image={ExelPNG.src}
						title="Скачуй файл вручну"
						description="Скачуй файл з набором товарів з вашого кабінета. Їх також можна одразу відфільтрувати."
						href={RouteConstants.Account}
					/>
					<HowItWorksItem
						image={CheckPNG.src}
						title="Перевіряй замовлення"
						description="Перевіряйте замовлення в вашому кабінеті. Зручно перевіряй товар та дані клієнта."
						href={RouteConstants.Account}
					/>
				</div>
			</Section>
		</div>
	)
}

export default HowItWorks
