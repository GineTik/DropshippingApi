import DynamicHeroIcon from '../../Common/DynamicHeroIcon/DynamicHeroIcon'

interface IProps {
	title: string
	children: TaskItem[]
}

const TaskColumn = ({ title, children }: IProps) => {
	return (
		<div className="grow px-2">
			<div className="flex gap-2 mb-4 items-center">
				<h2 className="text-xl font-bold">{title}</h2>
				<span className="text-xm text-slate-700 group">{children.length}</span>
				<div
					className="ml-auto hover:bg-slate-100 cursor-pointer rounded-full
				p-1 active:bg-slate-200"
				>
					<DynamicHeroIcon icon="EllipsisVerticalIcon" className="w-7" />
				</div>
			</div>
			{children}
		</div>
	)
}

export default TaskColumn
