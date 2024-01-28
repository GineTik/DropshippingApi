import classNames from "classnames";
import React from "react";

export interface BaseButtonProps {
	className?: string;
	children: string | React.ReactElement | (string | React.ReactElement)[];
}

const BaseButton = ({ className, children }: BaseButtonProps) => {
	return (
		<div
			className={classNames(
				className,
				"rounded-full px-7 py-[10px] cursor-pointer",
				"font-medium",
				"transition ease-in-out",
				"inline-flex items-center"
			)}
		>
			{children}
		</div>
	);
};

export default BaseButton;
