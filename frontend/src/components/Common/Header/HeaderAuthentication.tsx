"use client";
import React from "react";
import BorderedButton from "../Button/BorderedButton";
import BlueButton from "../Button/BlueButton";
import RouteConstants from "../../../../constants/RouteConstants";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const HeaderAuthentication = () => {
	const pathname = usePathname();
	return (
		<div className="text-sm font-medium flex">
			{pathname != RouteConstants.Login && (
				<BorderedButton
					className={classNames("mr-2 md:block", {
						hidden: pathname != RouteConstants.Registration,
					})}
					href={RouteConstants.Login}
				>
					Ввійти
				</BorderedButton>
			)}
			{pathname != RouteConstants.Registration && (
				<BlueButton href={RouteConstants.Registration}>
					Спробувати{" "}
					<span className="ml-1 hidden sm:inline">безкоштовно</span>
				</BlueButton>
			)}
		</div>
	);
};

export default HeaderAuthentication;
