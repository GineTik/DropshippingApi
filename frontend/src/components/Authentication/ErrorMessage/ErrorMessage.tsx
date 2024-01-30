import DynamicHeroIcon from "@/components/Common/DynamicHeroIcon/DynamicHeroIcon";
import React from "react";

interface ErrorMessageProps {
	children: string | string[];
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
	return (
		<div className="flex bg-rose-100 p-3 rounded-xl border border-rose-500">
			<DynamicHeroIcon
				icon="ExclamationCircleIcon"
				className="min-w-5 w-5 text-rose-900"
			/>
			<span className="ml-2">{children}</span>
		</div>
	);
};

export default ErrorMessage;
