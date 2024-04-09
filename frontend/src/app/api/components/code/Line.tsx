interface LineProps {
	children: any
	withoutTab?: boolean
	tabsCount?: number
}

const Line = ({ children, withoutTab, tabsCount }: LineProps) => {
	return (
		<div
			className="text-nowrap"
			style={{
				marginLeft: withoutTab ? '' : `${2.75 * (tabsCount ?? 1)}rem`
			}}
		>
			{children}
		</div>
	)
}

export default Line
