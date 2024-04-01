import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import RouteConstants from '../../../../../constants/RouteConstants'

interface SuppliersItemProps {
	imgSrc?: string
	id: number
	title: string
	description: string
	isBlue?: boolean
}

const SuppliersItem = ({ imgSrc, title, description, isBlue, id }: SuppliersItemProps) => {
	return (
		<Link href={RouteConstants.Supplier + id} className={classNames("text-center max-w-80 rounded-3xl p-5 cursor-pointer hover:bg-gray-300/30 transition", {
			"bg-blue-500 text-white hover:bg-blue-500/70": isBlue
		})}>
			{imgSrc && <div className="mx-auto mb-8 w-28 h-28 rounded-full bg-white grid place-content-center">
				<Image
					src={imgSrc}
					alt={title}
					width={85}
					height={50}
					className="m-auto"
				/>
			</div>}
			<span className={classNames("font-bold text-xl mb-3", {
				"text-white": isBlue
			})}>{title}</span>
			<div className="leading-7 line-clamp-3">{description}</div>
		</Link>
	)
}

export default SuppliersItem
