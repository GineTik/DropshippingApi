import classNames from "classnames";
import Link from "next/link";
import React from "react";

export interface BaseButtonProps {
	className?: string;
	children: string | React.ReactElement | (string | React.ReactElement)[];
	href?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const BaseButton = ({
	className,
	children,
	href,
	onClick,
}: BaseButtonProps) => {
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
			onClick={onClick}
		>
			{children}
		</Link>
	);
};

export default BaseButton;
