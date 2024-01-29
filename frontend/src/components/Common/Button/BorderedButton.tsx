import React from "react";
import BaseButton, { BaseButtonProps } from "./BaseButton";
import classNames from "classnames";

interface BorderedButtonProps extends BaseButtonProps {}

const BorderedButton = ({
	className,
	children,
	...other
}: BorderedButtonProps) => {
	return (
		<BaseButton
			{...other}
			className={classNames(className, "border", "hover:bg-gray-100")}
			children={children}
		/>
	);
};

export default BorderedButton;
