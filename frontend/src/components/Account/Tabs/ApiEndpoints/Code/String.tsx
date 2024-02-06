import classNames from "classnames";
import React from "react";

interface CodeStringProps {
	children: string | string[];
	className?: string;
}

const CodeString = ({ children, className }: CodeStringProps) => {
	return (
		<span
			className={classNames(
				"text-green-500 bg-gray-800 rounded-lg",
				className
			)}
		>
			"{children}"
		</span>
	);
};

export default CodeString;
