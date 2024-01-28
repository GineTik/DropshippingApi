import classNames from "classnames";
import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: string | string[];
}

const H1 = ({ children, ...h1Props }: H1Props) => {
	return (
		<h1
			{...h1Props}
			className={classNames(
				"text-gray-800 font-bold text-2xl md:text-[2.7rem] leading-tight",
				h1Props.className
			)}
		>
			{children}
		</h1>
	);
};

export default H1;
