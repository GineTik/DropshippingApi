import { LucideIcon } from "lucide-react";

interface IProps {
	icon: LucideIcon;
	className?: string;
	ariaHidden?: string;
}

const DynamicHeroIcon = ({ icon, className, ariaHidden }: IProps) => {
	const LucideIcon = icon;

	return (
		<>
			{LucideIcon && (
				<LucideIcon size={24} />
			)}
		</>
	);
};

export default DynamicHeroIcon;
