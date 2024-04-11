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
			className="block p-9 shadow-lg bg-slate-900 rounded-xl text-sm hover:scale-105 transition space-y-4"
		>
			<h5>{title}</h5>
			<p className="text-sm/normal leading-normal">{description}</p>
		</Link>
	)
}

export default LinkBlock
