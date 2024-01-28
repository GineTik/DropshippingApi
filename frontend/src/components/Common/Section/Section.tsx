import classNames from "classnames";
import React, { RefAttributes } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactElement | React.ReactElement[];
}

const Section = ({ children, ...divAttributes }: SectionProps) => {
	return (
		<div
			{...divAttributes}
			className={classNames(
				"w-full max-w-[1136px] mx-auto px-3",
				divAttributes.className
			)}
		>
			{children}
		</div>
	);
};

export default Section;
