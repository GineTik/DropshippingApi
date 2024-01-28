import React from "react";

interface IProps {
	text: string;
}

const MenuHeader = ({ text }: IProps) => {
	return (
		<h4 className="pt-5 pb-3 pl-7 text-lg font-semibold text-gray-300">
			{text}
		</h4>
	);
};

export default MenuHeader;
