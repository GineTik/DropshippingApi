import classNames from "classnames";
import Link from "next/link";
import React from "react";

export interface BaseButtonProps {
	className?: string;
	children: string | React.ReactElement | (string | React.ReactElement)[];
	href?: string;
}

const BaseButton = ({ className, children, href }: BaseButtonProps) => {
	console.log(href);

	return (
		<Link
			className={classNames(
				className,
				"rounded-full px-7 py-[10px] cursor-pointer",
				"font-medium",
				"transition ease-in-out",
				"inline-flex items-center"
			)}
			href={href ?? "#"}
		>
			{children}
		</Link>
	);
};

export default BaseButton;
