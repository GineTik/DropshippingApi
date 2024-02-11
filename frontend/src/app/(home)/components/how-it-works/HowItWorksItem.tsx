import H4 from '@/components/headings/H4'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface HowItWorksItemProps {
	image: string
	title: string
	description: string
	imageSize?: number
	href: string
}

const HowItWorksItem = ({
	image,
	title,
	description,
	imageSize,
	href
}: HowItWorksItemProps) => {
	return (
		<Link
			className={classNames(
				'text-center w-80',
				'rounded-3xl p-5',
				'hover:bg-gray-200/30 cursor-pointer transition'
			)}
			href={href}
		>
			<div className="mx-auto w-28 h-28 rounded-full bg-gray-200 flex justify-center items-center">
				<Image
					src={image}
					alt={title}
					width={imageSize ?? 50}
					height={imageSize ?? 50}
				/>
			</div>
			<H4 className="mt-8 mb-3">{title}</H4>
			<div className="leading-7">{description}</div>
		</Link>
	)
}

export default HowItWorksItem
