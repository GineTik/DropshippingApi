"use client";
import ScaledButton from "@/components/Common/Button/IconButton";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import React from "react";

interface SettingsTabProps {
	children: any;
}

const SettingsTab = ({ children }: SettingsTabProps) => {
	return (
		<Tab
			className={({ selected }) =>
				classNames("w-full", {
					"bg-gray-100 rounded-lg": selected,
				})
			}
		>
			{({ selected }) => (
				<ScaledButton
					className={classNames(
						"px-3 py-2 w-full text-left justify-start"
					)}
					disabled={selected}
				>
					{children}
				</ScaledButton>
			)}
		</Tab>
	);
};

export default SettingsTab;
