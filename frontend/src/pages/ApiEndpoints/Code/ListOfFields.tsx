import CodeString from './String'

interface ListOfFieldsProps {
	fields: Record<string, any>
}

const ListOfFields = ({ fields }: ListOfFieldsProps) => {
	return (
		<ul className="ml-6">
			{Object.keys(fields).map((f) => (
				<li className="list-disc py-1">
					<CodeString className="px-2 py-1">{f}</CodeString>
					{' - ' + fields[f]}
				</li>
			))}
		</ul>
	)
}

export default ListOfFields
