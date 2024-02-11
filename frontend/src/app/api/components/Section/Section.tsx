interface ApiSectionProps {
	children: any
}

const ApiSection = ({ children }: ApiSectionProps) => {
	return <div className="py-5 space-y-4">{children}</div>
}

export default ApiSection
