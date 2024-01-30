import { Tab } from "@headlessui/react";
import React from "react";

interface AccountTabPanelProps {
	children: string | React.ReactElement | (string | React.ReactElement)[];
}

const AccountTabPanel = ({ children }: AccountTabPanelProps) => {
	return <Tab.Panel className="p-5 outline-none">{children}</Tab.Panel>;
};

export default AccountTabPanel;
