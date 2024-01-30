import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ProfileMenuItemProps {
	children: string | string[];
	href: string;
	isDanger?: boolean;
}

const ProfileMenuItem = ({
	children,
	href,
	isDanger,
}: ProfileMenuItemProps) => {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			className={classNames(
				"block px-4 py-2 hover:bg-blue-50 rounded-xl",
				"transition-colors duration-100",
				isDanger ? "hover:bg-rose-50" : "hover:bg-blue-50",
				pathname == href ? (isDanger ? "bg-rose-50" : "bg-blue-50") : ""
			)}
		>
			{children}
		</Link>
	);
};

export default ProfileMenuItem;
