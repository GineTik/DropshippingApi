import H4 from '@/components/Headings/H4'
import DynamicHeroIcon from '@/components/HeroIcon/DynamicHeroIcon'

interface AccountItemProps {
	icon: string
	title: string
	description: string
}

const AccountItem = ({ icon, title, description }: AccountItemProps) => {
	return (
		<div className="shadow-lg bg-white rounded-3xl p-6 sm:hover:scale-110 transition">
			<div className="bg-blue-500 p-3 rounded-xl inline-block">
				<DynamicHeroIcon icon={icon} className="w-8 text-white" />
			</div>
			<H4 className="mt-3">{title}</H4>
			<div className="my-3 text-sm">{description}</div>
			{/* <BlueButton className="w-full flex justify-center text-sm">
				Більше
			</BlueButton> */}
		</div>
	)
}

export default AccountItem
