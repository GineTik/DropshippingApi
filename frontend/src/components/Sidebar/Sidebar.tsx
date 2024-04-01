import { Blocks, Home, MessageCircleMore } from 'lucide-react'
import Image from 'next/image'
import MenuHeader from './MenuHeader'
import MenuItem from './MenuItem'

const Sidebar = () => {
	return (
		<div className="w-[345px] h-full pl-6 pr-12 border-r dark:border-r-gray-800">
			<div className="py-10 pl-7">
				<Image src="/logo.svg" alt="Logo" width={40} height={40} />
			</div>
			<div className="flex flex-col">
				<MenuHeader text="Головне меню" />
				<MenuItem icon={Home} text="Головна" href="/" />
				<MenuItem icon={Blocks} text="Задачі" href="/Account" />
				<MenuItem
					icon={MessageCircleMore}
					text="Повідомлення"
					href="/messages"
				/>
				{/* <MenuItem icon="Cog6ToothIcon" text="Налаштування" href="/Settings" /> */}
			</div>
		</div>
	)
}

export default Sidebar
