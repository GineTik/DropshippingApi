import DynamicHeroIcon from '@/components/icons/DynamicHeroIcon'
import { BadgeCheck } from 'lucide-react'

interface PresentMenuItemProps {
	text: string
}

const PresentMenuItem = ({ text }: PresentMenuItemProps) => {
	return (
		<div className="flex gap-1 items-center font-semibold py-1 md:py-2 text-xs md:text-base">
			<DynamicHeroIcon icon={BadgeCheck} className="w-5" />
			{text}
		</div>
	)
}

export default PresentMenuItem
