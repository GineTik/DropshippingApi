import React from "react";
import TaskItem from "./TaskItem";
import TaskColumn from "./TaskGroup";

const TaskList = () => {
	return (
		<div className="">
			<TaskColumn title="Column 1">
				<TaskItem title="Title of task 1" />
				<TaskItem title="Title of task 2" />
				<TaskItem title="Title of task 3" />
			</TaskColumn>
			<TaskColumn title="Column 2">
				<TaskItem title="Title of task 1" />
				<TaskItem title="Title of task 2" />
				<TaskItem title="Title of task 3" />
			</TaskColumn>
			<TaskColumn title="Column 3">
				<TaskItem title="Title of task 1" />
				<TaskItem title="Title of task 2" />
				<TaskItem title="Title of task 3" />
			</TaskColumn>
		</div>
	);
};

export default TaskList;
