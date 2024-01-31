import React from "react";
import Comment from "./Comment";
import CodeString from "./String";

interface StringValueProps {
	children: string;
}

const StringValue = ({ children }: StringValueProps) => {
	const indexOfStartComment = children.indexOf("//");

	if (indexOfStartComment == -1) {
		return (
			<>
				<CodeString>{children}</CodeString>
				<Comment>,</Comment>
			</>
		);
	}

	const string = children.substring(0, indexOfStartComment).trim();
	const comment = children.substring(indexOfStartComment, children.length);
	return (
		<>
			<CodeString>{string}</CodeString>
			<Comment>, </Comment>
			<Comment>{comment}</Comment>
		</>
	);
};

export default StringValue;
