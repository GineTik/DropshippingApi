import React from "react";

interface IProps {
	title: string;
}

const TaskItem = ({ title }: IProps) => {
	return (
		<div className="mb-3 p-3 rounded-lg border hover:bg-gray-100 cursor-pointer transition-all">
			{title}
		</div>
	);
};

export default TaskItem;
