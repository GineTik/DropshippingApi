import H1 from '@/components/common/headings/H1'
import BlueButton from '../../common/buttons/BlueButton'
import Section from '../../common/section/Section'
import PresentMenuItem from './PresentMenuItem'

const Present = () => {
	return (
		<Section className="flex gap-3 mt-14 mb-7 md:mb-32 items-center flex-col md:flex-row">
			<div className="flex flex-col items-center md:items-start w-full md:w-[55%]">
				<H1 className="text-center md:text-left">
					Отримай дропшипінг товари по АПІ{' '}
				</H1>
				<div className="mx-auto md:mx-0 mt-5">
					<PresentMenuItem text="Зручний сервіс для отримування товарів" />
					<PresentMenuItem text="Багато поставщиків в одному апі" />
					<PresentMenuItem text="Використовуй нас замість повноціного сервера" />
				</div>
				<div className="mt-5 flex flex-col items-center md:items-start">
					<BlueButton>Спробувати апі</BlueButton>
				</div>
			</div>
			<div className="w-full md:w-[45%] mt-3 md:mt-0">
				<div className="w-full max-w-[550px] h-[450px] bg-gray-300 rounded-xl mx-auto"></div>
			</div>
		</Section>
	)
}

export default Present
