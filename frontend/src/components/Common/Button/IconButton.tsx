import classNames from "classnames";
import React from "react";

interface IconButtonProps {
	children: React.ReactElement;
	onClick?: () => void;
	isDanger?: boolean;
	tooltip?: string;
}

const IconButton = ({
	children,
	onClick,
	isDanger,
	tooltip,
}: IconButtonProps) => {
	return (
		<div
			className={classNames(
				"w-10 h-10 group relative cursor-pointer flex justify-center items-center",
				"active:scale-90",
				{
					"hover:text-rose-500 transition": isDanger,
				}
			)}
			onClick={onClick}
		>
			<div
				className={classNames(
					"w-10 h-10 scale-0",
					"-z-10 absolute",
					"absolute cursor-pointer rounded-lg transition duration-75",
					"group-hover:scale-100",
					isDanger
						? "group-hover:bg-rose-100"
						: "group-hover:bg-gray-100"
				)}
			></div>
			{tooltip && (
				<div
					className={classNames(
						"opacity-0 group-hover:opacity-100",
						"absolute bottom-full",
						"bg-gray-950 p-2 text-xs text-white rounded-xl",
						"scale-0 group-hover:scale-100 transition",
						"select-none pointer-events-none"
					)}
				>
					{tooltip}
				</div>
			)}
			{children}
		</div>
	);
};

export default IconButton;
