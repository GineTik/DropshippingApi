import classNames from "classnames";
import React from "react";

interface InputProps {
	placeholder: string;
	type: string;
	className?: string;
}

const StyledInput = ({ placeholder, type, className }: InputProps) => {
	return (
		<input
			className={classNames(
				"border rounded-full py-3 px-6 outline-none",
				className
			)}
			placeholder={placeholder}
			type={type}
		/>
	);
};

export default StyledInput;
