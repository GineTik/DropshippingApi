import MSDROPLogo from '@/../public/logos-of-suppliers/MS DROP.png'
import WebSkladLogo from '@/../public/logos-of-suppliers/WebSklad.png'
import ZimaLogo from '@/../public/logos-of-suppliers/zima.svg'
import ColoredButton from '@/components/buttons/ColoredButton'
import H2 from '@/components/headings/H2'
import Section from '@/components/section/Section'
import SuppliersItem from './SuppliersItem'

const Suppliers = () => {
	return (
		<div className="bg-gradient-to-r from-blue-600 to-blue-800">
			<Section className="py-12 md:py-32 text-white flex flex-col items-center">
				<div className="mx-auto w-full max-w-[800px] text-center text-white">
					<H2 className="text-white mb-4">Деякі із постачальників</H2>
					<div className="text-white block leading-normal text-xl mb-12 md:mb-20">
						Ви можете використовувати цих постачальників та їх товари для
						заробітку на дропшипінгу.
					</div>
				</div>
				<div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-10">
					<SuppliersItem
						imgSrc={MSDROPLogo.src}
						title="MS DROP"
						description="Free for small teams. 14-day free trial
                        for premium features."
					/>
					<SuppliersItem
						imgSrc={ZimaLogo.src}
						title="Zima"
						description="Off-load the details for your most stressful project here."
					/>
					<SuppliersItem
						imgSrc={WebSkladLogo.src}
						title="Web Sklad"
						description="Offload the stressful stuff. Drag and drop your way to sanity."
					/>
				</div>
				<ColoredButton
					className="mt-12"
					color="bg-white text-black"
					hoverColor="hover:bg-blue-200"
				>
					Взнати більше
				</ColoredButton>
			</Section>
		</div>
	)
}

export default Suppliers
