import H4 from "@/components/Common/Headings/H4";
import React from "react";
import Image from "next/image";

interface SuppliersItemProps {
	imgSrc: string;
	title: string;
	description: string;
}

const SuppliersItem = ({ imgSrc, title, description }: SuppliersItemProps) => {
	return (
		<div className="text-center min-w-72 max-w-80 rounded-3xl p-5 cursor-pointer hover:bg-gray-300/30 transition">
			<div className="mx-auto mb-8 w-28 h-28 rounded-full bg-white grid place-content-center">
				<Image
					src={imgSrc}
					alt={title}
					width={85}
					height={50}
					className="m-auto"
				/>
			</div>
			<H4 className="text-white mb-3">{title}</H4>
			<div className="leading-7">{description}</div>
		</div>
	);
};

export default SuppliersItem;
