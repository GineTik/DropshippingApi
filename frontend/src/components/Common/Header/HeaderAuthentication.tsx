'use client'
import { useActions } from '@/hooks/useActions'
import { StateType } from '@/store/store'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import RouteConstants from '../../../../constants/RouteConstants'
import UserLogo from '../../../../public/UserLogo.png'
import BlueButton from '../Button/BlueButton'
import BorderedButton from '../Button/BorderedButton'
import ScaledButton from '../Button/ScaledButton'
import ProfileMenuItem from './ProfileMenuItem'

const HeaderAuthentication = () => {
	const pathname = usePathname()
	const { auth } = useSelector((state: StateType) => state)
	const { logout } = useActions()

	return (
		<div className="text-sm font-medium flex">
			{auth.isLoadingProfile ? (
				<Loader2 className="animate-spin" size={24} />
			) : auth.loggedIn ? (
				<Menu as="div" className="relative">
					<Menu.Button>
						<ScaledButton className="flex items-center p-1 pr-2">
							<Image
								src={UserLogo.src}
								alt="User"
								width={50}
								height={50}
								className="mr-3"
							/>
							<div className="mr-1">
								<div className="w-28 truncate">{auth.user?.email}</div>
								<div className="text-gray-400 text-xs text-left">
									Немає підписки
								</div>
							</div>
							<ChevronDownIcon className="w-4" />
						</ScaledButton>
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
							<div className="p-2">
								<Menu.Item>
									<ProfileMenuItem href={RouteConstants.Account}>
										Профіль
									</ProfileMenuItem>
								</Menu.Item>
								<Menu.Item>
									<ProfileMenuItem href={RouteConstants.Settings}>
										Налаштування
									</ProfileMenuItem>
								</Menu.Item>
								<Menu.Item>
									<ProfileMenuItem onClick={() => logout()} isDanger>
										Вийти
									</ProfileMenuItem>
								</Menu.Item>
							</div>
						</Menu.Items>
					</Transition>
				</Menu>
			) : (
				<>
					{pathname != RouteConstants.Login && (
						<BorderedButton
							className={classNames('mr-2 md:block', {
								hidden: pathname != RouteConstants.Registration
							})}
							href={RouteConstants.Login}
						>
							Ввійти
						</BorderedButton>
					)}
					{pathname != RouteConstants.Registration && (
						<BlueButton href={RouteConstants.Registration}>
							Спробувати{' '}
							<span className="ml-1 hidden sm:inline">безкоштовно</span>
						</BlueButton>
					)}
				</>
			)}
		</div>
	)
}

export default HeaderAuthentication
