import React from "react";
import BaseButton, { BaseButtonProps } from "./BaseButton";
import classNames from "classnames";

export interface ColoredButtonProps extends BaseButtonProps {
	color: string;
	hoverColor: string;
}

const ColoredButton = ({
	className,
	children,
	color,
	hoverColor,
	...other
}: ColoredButtonProps) => {
	return (
		<BaseButton
			{...other}
			className={classNames(className, color, hoverColor)}
			children={children}
		/>
	);
};

export default ColoredButton;
