import React from "react";
import BorderedButton from "../Button/BorderedButton";
import BlueButton from "../Button/BlueButton";
import RouteConstants from "../../../../constants/RouteConstants";

const HeaderAuthentication = () => {
	return (
		<div className="text-sm font-medium flex">
			<BorderedButton
				className="mr-2 hidden md:block"
				href={RouteConstants.Login}
			>
				Ввійти
			</BorderedButton>
			<BlueButton href={RouteConstants.Registration}>
				Спробувати{" "}
				<span className="ml-1 hidden sm:inline">безкоштовно</span>
			</BlueButton>
		</div>
	);
};

export default HeaderAuthentication;
