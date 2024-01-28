import React from "react";
import ColoredButton from "./ColoredButton";
import { BaseButtonProps } from "./BaseButton";

interface BlueButtonProps extends BaseButtonProps {}

const BlueButton = ({ className, children }: BlueButtonProps) => {
	return (
		<ColoredButton
			color="bg-blue-500 text-white"
			hoverColor="hover:bg-blue-600"
			children={children}
		/>
	);
};

export default BlueButton;
