import classNames from 'classnames'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactElement | React.ReactElement[]
}

const Section = ({ children, ...divAttributes }: SectionProps) => {
	return (
		<div
			{...divAttributes}
			className={classNames(
				'w-full max-w-[1136px] mx-auto xl:px-5 px-[60px]',
				divAttributes.className
			)}
		>
			{children}
		</div>
	)
}

export default Section
