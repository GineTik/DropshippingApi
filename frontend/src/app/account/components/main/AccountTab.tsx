import { Tab } from "@headlessui/react";
import classNames from "classnames";
import React from "react";

interface AccountTabProps {
	children: string | React.ReactElement | (string | React.ReactElement)[];
	className?: string;
}

const AccountTab = ({ children, className }: AccountTabProps) => {
	return (
		<Tab
			className={({ selected }) =>
				classNames(
					"transition",
					"p-5 py-2.5 text-sm font-medium leading-5 rounded-lg outline-none",
					selected
						? "text-blue-500 border-b-4 border-blue-500"
						: "hover:bg-gray-50",
					className
				)
			}
		>
			{children}
		</Tab>
	);
};

export default AccountTab;
