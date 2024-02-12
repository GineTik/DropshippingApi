import Link from 'next/link'

interface LinkBlockProps {
	href: string
	title: string
	description: string
}

const LinkBlock = ({ href, title, description }: LinkBlockProps) => {
	return (
		<Link
			href={href}
			className="block p-9 shadow-lg shadow-blue-100 rounded-xl text-sm hover:scale-105 transition space-y-2"
		>
			<span className="font-bold mb-4 text-base">{title}</span>
			<p className="text-sm/normal">{description}</p>
		</Link>
	)
}

export default LinkBlock
