import React from "react";

interface InputProps {
	placeholder: string;
	type: string;
}

const StyledInput = ({ placeholder, type }: InputProps) => {
	return (
		<input
			className="border rounded-full py-3 px-6 outline-none"
			placeholder={placeholder}
			type={type}
		/>
	);
};

export default StyledInput;
