import React from "react";
import MenuItem from "./MenuItem";
import Image from "next/image";
import MenuHeader from "./MenuHeader";

const Sidebar = () => {
	return (
		<div className="w-[345px] h-full pl-6 pr-12 border-r dark:border-r-gray-800">
			<div className="py-10 pl-7">
				<Image src="/logo.svg" alt="Logo" width={40} height={40} />
			</div>
			<div className="flex flex-col">
				<MenuHeader text="Головне меню" />
				<MenuItem icon="HomeIcon" text="Головна" href="/" />
				<MenuItem
					icon="RectangleStackIcon"
					text="Задачі"
					href="/account"
				/>
				<MenuItem
					icon="ChatBubbleBottomCenterIcon"
					text="Повідомлення"
					href="/messages"
				/>
				<MenuItem
					icon="Cog6ToothIcon"
					text="Налаштування"
					href="/settings"
				/>
			</div>
		</div>
	);
};

export default Sidebar;
