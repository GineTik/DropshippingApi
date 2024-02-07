import classNames from "classnames";
import React from "react";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: string | string[];
}

const H2 = ({ children, ...h2Props }: H2Props) => {
	return (
		<h2
			{...h2Props}
			className={classNames(
				"text-gray-800 font-bold text-2xl md:text-4xl leading-snug",
				h2Props.className
			)}
		>
			{children}
		</h2>
	);
};

export default H2;
