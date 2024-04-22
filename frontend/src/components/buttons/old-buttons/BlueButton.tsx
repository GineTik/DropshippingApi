import { BaseButtonProps } from "./BaseButton";
import ColoredButton from "./ColoredButton";

interface BlueButtonProps extends BaseButtonProps {}

const BlueButton = ({ children, ...other }: BlueButtonProps) => {
	return (
		<ColoredButton
			{...other}
			color="bg-blue-500 text-white"
			hoverColor="hover:bg-blue-600"
			children={children}
		/>
	);
};

export default BlueButton;
