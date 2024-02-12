import classNames from 'classnames'
import Comment from './Comment'
import Line from './Line'
import CodeString from './String'
import StringValue from './StringValue'

interface CodeObjectProps {
	className?: string
	object: object | string | object[] | string[]
}

const CodeObject = (props: CodeObjectProps) => {
	return (
		<div
			className={classNames(
				'bg-gray-800 rounded-xl text-white w-full px-5 py-4',
				'overflow-x-auto',
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
	if (typeof props.object === 'number') {
		return (
			<>
				<span className="text-orange-500">{props.object}</span>
				<Comment>,</Comment>
			</>
		)
	}
	if (typeof props.object === 'string') {
		return <StringValue>{props.object}</StringValue>
	} else if (Array.isArray(props.object)) {
		return <CodeOfArrayInner object={props.object} />
	} else if (typeof props.object === 'object') {
		return <CodeOfObjectInner object={props.object} />
	}
}

const CodeOfObjectInner = ({ object }: { object: Record<string, any> }) => {
	return (
		<>
			{'{'}
			{Object.keys(object).map((parameterKey) => (
				<Line key={crypto.randomUUID()}>
					<CodeString withoutPadding isDark>
						{parameterKey}
					</CodeString>
					{': '}
					<CodeInner object={object[parameterKey]} />
				</Line>
			))}
			{'}'}
		</>
	)
}

const CodeOfArrayInner = ({ object }: CodeObjectProps) => {
	return (
		<>
			[
			{(object as any[]).map((element) => (
				<Line key={crypto.randomUUID()}>
					<CodeInner object={element} />
				</Line>
			))}
			]
		</>
	)
}

export default CodeObject
