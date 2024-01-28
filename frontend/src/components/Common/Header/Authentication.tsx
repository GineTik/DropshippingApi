import React from "react";
import BorderedButton from "../Button/BorderedButton";
import BlueButton from "../Button/BlueButton";

const Authentication = () => {
	return (
		<div className="text-sm font-medium flex">
			<BorderedButton className="mr-2 hidden md:block">
				Ввійти
			</BorderedButton>
			<BlueButton>
				Спробувати <span className="hidden sm:inline">безкоштовно</span>
			</BlueButton>
		</div>
	);
};

export default Authentication;
