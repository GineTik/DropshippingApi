import classNames from 'classnames'
import Line from './Line'
import CodeString from './String'

interface CurlProps {
	method: string
	url: string
	headers?: Record<string, any>
	parameters?: Record<string, any>
	className?: string
}

const Curl = ({ method, url, headers, parameters, className }: CurlProps) => {
	return (
		<div
			className={classNames(
				'bg-gray-800 px-5 py-4 rounded-xl text-white w-full overflow-x-auto',
				className
			)}
		>
			<code>
				<Line withoutTab>
					<span className="text-orange-500">curl</span> --request
					{` ${method} `}
				</Line>
				<Line>
					--url <CodeString isDark>{url}</CodeString>
				</Line>
				{headers &&
					Object.keys(headers).map((key) => (
						<Line key={crypto.randomUUID()}>
							--header{' '}
							<CodeString isDark>{`${key}: ${headers[key]}`}</CodeString>
						</Line>
					))}

				{parameters &&
					Object.keys(parameters).map((key) => (
						<Line key={crypto.randomUUID()}>
							--param{' '}
							<CodeString isDark>{`${key}=${parameters[key]}`}</CodeString>
						</Line>
					))}
			</code>
		</div>
	)
}

export default Curl
