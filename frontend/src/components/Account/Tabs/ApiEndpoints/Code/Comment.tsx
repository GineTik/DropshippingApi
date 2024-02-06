import React from "react";

interface CommentProps {
	children: any;
}

const Comment = ({ children }: CommentProps) => {
	return <span className="text-gray-500">{children}</span>;
};

export default Comment;
