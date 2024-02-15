import { Code } from './Code'
import CodeString from './String'

interface ListOfFieldsProps {
	fields: Record<string, any>
}

const ListOfFields = ({ fields }: ListOfFieldsProps) => {
	return (
		<ul className="space-y-1 my-4 list-disc pl-7">
			{Object.keys(fields).map((f) => (
				<li>
					<CodeString>{f}</CodeString>
					{' - '}
					<ParseValueOfField fieldValue={fields[f]} />
				</li>
			))}
		</ul>
	)
}

const ParseValueOfField = ({ fieldValue }: { fieldValue: string }) => {
	const array = fieldValue.split('"')
	let result: any[] = []
	for (let i = 0; i < array.length; i++) {
		result.push(i % 2 === 1 ? Code.String({ children: array[i] }) : array[i])
	}
	return result
}

export default ListOfFields
