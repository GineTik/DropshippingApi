import H4 from "@/components/Common/Headings/H4";
import React from "react";

interface HowItWorksItemProps {
	title: string;
	description: string;
}

const HowItWorksItem = ({ title, description }: HowItWorksItemProps) => {
	return (
		<div className="text-center w-80">
			<div className="mx-auto w-28 h-28 rounded-full bg-gray-200"></div>
			<H4 className="mt-8 mb-3">{title}</H4>
			<div className="leading-7">{description}</div>
		</div>
	);
};

export default HowItWorksItem;
