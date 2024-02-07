"use client";
import * as HIcons from "@heroicons/react/24/outline";

interface IProps {
	icon: string;
	className?: string;
	ariaHidden?: string;
}

const DynamicHeroIcon = ({ icon, className, ariaHidden }: IProps) => {
	// @ts-ignore
	const TheIcon: Jsx.Element = HIcons[icon];

	return (
		<>
			{/* @ts-ignore */}
			{TheIcon && (
				<TheIcon
					className={className}
					aria-hidden={ariaHidden ?? "true"}
				/>
			)}
		</>
	);
};

export default DynamicHeroIcon;
