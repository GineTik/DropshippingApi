"use client";
import React, { Fragment } from "react";
import BorderedButton from "../Button/BorderedButton";
import BlueButton from "../Button/BlueButton";
import RouteConstants from "../../../../constants/RouteConstants";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";
import UserLogo from "../../../../public/UserLogo.png";
import DynamicHeroIcon from "../DynamicHeroIcon/DynamicHeroIcon";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import ProfileMenuItem from "./ProfileMenuItem";

const HeaderAuthentication = () => {
	const pathname = usePathname();
	return (
		<div className="text-sm font-medium flex">
			{pathname != RouteConstants.Account ? (
				<>
					{pathname != RouteConstants.Login && (
						<BorderedButton
							className={classNames("mr-2 md:block", {
								hidden: pathname != RouteConstants.Registration,
							})}
							href={RouteConstants.Login}
						>
							Ввійти
						</BorderedButton>
					)}
					{pathname != RouteConstants.Registration && (
						<BlueButton href={RouteConstants.Registration}>
							Спробувати{" "}
							<span className="ml-1 hidden sm:inline">
								безкоштовно
							</span>
						</BlueButton>
					)}
				</>
			) : (
				<Menu as="div" className="relative">
					<Menu.Button className="flex items-center p-1 pr-2 transition hover:bg-blue-50 rounded-2xl">
						<Image
							src={UserLogo.src}
							alt="User"
							width={50}
							height={50}
							className="mr-3"
						/>
						<div className="mr-1">
							<div className="w-28 truncate">
								densheva9999999@gmail.com
							</div>
							<div className="text-gray-400 text-xs text-left">
								Немає підписки
							</div>
						</div>
						<DynamicHeroIcon
							icon="ChevronDownIcon"
							className="w-4"
						/>
					</Menu.Button>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="rounded-2xl absolute right-0 origin-top-right divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
							<div className="p-1">
								<Menu.Item>
									<ProfileMenuItem
										href={RouteConstants.Account}
									>
										Профіль
									</ProfileMenuItem>
								</Menu.Item>
								<Menu.Item>
									<ProfileMenuItem href="/settings">
										Налаштування
									</ProfileMenuItem>
								</Menu.Item>
								<Menu.Item>
									<ProfileMenuItem href="/exit" isDanger>
										Вийти
									</ProfileMenuItem>
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			)}
		</div>
	);
};

export default HeaderAuthentication;
