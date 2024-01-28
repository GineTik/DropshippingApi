import classNames from "classnames";
import React from "react";

interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: string | string[];
}

const H4 = ({ children, ...otherProps }: H4Props) => {
	return (
		<h2
			{...otherProps}
			className={classNames(
				"text-gray-800 font-bold text-xl",
				otherProps.className
			)}
		>
			{children}
		</h2>
	);
};

export default H4;
