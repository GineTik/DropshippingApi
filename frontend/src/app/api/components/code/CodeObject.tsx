import classNames from 'classnames'
import Comment from './Comment'
import Line from './Line'
import CodeString from './String'
import StringValue from './StringValue'

interface CodeObjectProps {
	className?: string
	from: object | string | object[] | string[]
}

const CodeObject = (props: CodeObjectProps) => {
	return (
		<div
			className={classNames(
				'bg-gray-800 rounded-xl text-white w-full px-5 py-4',
				props.className
			)}
		>
			<code>
				<CodeInner {...props} />
			</code>
		</div>
	)
}

const CodeInner = (props: CodeObjectProps) => {
	if (typeof props.from === 'number') {
		return (
			<>
				<span className="text-orange-500">{props.from}</span>
				<Comment>,</Comment>
			</>
		)
	}
	if (typeof props.from === 'string') {
		return <StringValue>{props.from}</StringValue>
	} else if (Array.isArray(props.from)) {
		return <CodeOfArrayInner {...props} />
	} else if (typeof props.from === 'object') {
		return <CodeOfObjectInner {...props} />
	}
}

const CodeOfObjectInner = ({ from }: CodeObjectProps) => {
	return (
		<>
			{'{'}
			{Object.keys(from).map((parameterKey) => (
				<Line key={crypto.randomUUID()}>
					<CodeString withoutPadding>{parameterKey}</CodeString>
					{': '}
					<CodeInner from={from[parameterKey]} />
				</Line>
			))}
			{'}'}
		</>
	)
}

const CodeOfArrayInner = ({ from }: CodeObjectProps) => {
	return (
		<>
			[
			{(from as any[]).map((element) => (
				<Line key={crypto.randomUUID()}>
					<CodeInner from={element} />
				</Line>
			))}
			]
		</>
	)
}

export default CodeObject
