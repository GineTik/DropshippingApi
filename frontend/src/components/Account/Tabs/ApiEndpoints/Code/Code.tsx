import classNames from "classnames";
import React from "react";
import Line from "./Line";
import CodeString from "./String";
import Comment from "./Comment";
import StringValue from "./StringValue";

interface CodeProps {
	className?: string;
	from: object | string | object[] | string[];
}

const Code = (props: CodeProps) => {
	return (
		<div
			className={classNames(
				"bg-gray-800 rounded-xl text-white w-full px-5 py-4",
				props.className
			)}
		>
			<code>
				<CodeInner {...props} />
			</code>
		</div>
	);
};

const CodeInner = (props: CodeProps) => {
	if (typeof props.from === "number") {
		return (
			<>
				<span className="text-orange-500">{props.from}</span>
				<Comment>,</Comment>
			</>
		);
	}
	if (typeof props.from === "string") {
		return <StringValue>{props.from}</StringValue>;
	} else if (Array.isArray(props.from)) {
		return <CodeOfArrayInner {...props} />;
	} else if (typeof props.from === "object") {
		return <CodeOfObjectInner {...props} />;
	}
};

const CodeOfObjectInner = ({ from }: CodeProps) => {
	return (
		<>
			{"{"}
			{Object.keys(from).map((parameterKey) => (
				<Line key={crypto.randomUUID()}>
					<CodeString>{parameterKey}</CodeString>
					{": "}
					<CodeInner from={from[parameterKey]} />
				</Line>
			))}
			{"}"}
		</>
	);
};

const CodeOfArrayInner = ({ from }: CodeProps) => {
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
	);
};

export default Code;
