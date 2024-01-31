import React from "react";
import Line from "./Line";
import CodeString from "./String";
import classNames from "classnames";

interface CurlProps {
	method: string;
	url: string;
	headers?: object;
	className?: string;
}

const Curl = ({ method, url, headers, className }: CurlProps) => {
	return (
		<div
			className={classNames(
				"bg-gray-800 px-5 py-4 rounded-xl text-white w-full",
				className
			)}
		>
			<code>
				<Line withoutTab>
					<span className="text-orange-500">curl</span> --request
					{` ${method} `}
				</Line>
				<Line>
					--url <CodeString>{url}</CodeString>
				</Line>
				{headers &&
					Object.keys(headers).map((headerKey) => (
						<Line key={crypto.randomUUID()}>
							--header{" "}
							<CodeString>
								{`${headerKey}: ${headers[headerKey]}`}
							</CodeString>
						</Line>
					))}
			</code>
		</div>
	);
};

export default Curl;
