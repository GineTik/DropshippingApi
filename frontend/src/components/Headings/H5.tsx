import classNames from "classnames";
import React from "react";

interface H5Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: string | string[];
}

const H5 = ({ children, ...otherProps }: H5Props) => {
	return (
		<h5
			{...otherProps}
			className={classNames(
				"text-gray-800 font-bold text-sm",
				otherProps.className
			)}
		>
			{children}
		</h5>
	);
};

export default H5;
