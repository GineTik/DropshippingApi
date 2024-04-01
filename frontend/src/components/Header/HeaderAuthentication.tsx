'use client'
import RouteConstants from '@/../constants/RouteConstants'
import UserLogo from '@/../public/UserLogo.png'
import BlueButton from '@/components/buttons/BlueButton'
import BorderedButton from '@/components/buttons/BorderedButton'
import ScaledButton from '@/components/buttons/ScaledButton'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { StateType } from '@/store/store'
import { Menu, Transition } from '@headlessui/react'
import { useMutation } from '@tanstack/react-query'
import classNames from 'classnames'
import { ChevronDownIcon } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import ProfileMenuItem from './ProfileMenuItem'

const HeaderAuthentication = () => {
	const pathname = usePathname()
	const { user } = useSelector((state: StateType) => state.auth)
	const { logout } = useActions()

	const { mutateAsync: logoutAsync } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => AuthService.logout(),
		onSuccess: () => {
			logout()
		}
	})

	return (
		<div className="text-sm font-medium flex">
			{user ? (
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
								<div className="w-28 truncate">{user?.email}</div>
								<div className="text-gray-400 text-xs text-left">
									{user.emailIsConfirmed ? 'Немає підписки' : 'Активуйте аккаунт'}
								</div>
							</div>
							<ChevronDownIcon />
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
									<ProfileMenuItem href={RouteConstants.Settings.Security}>
										Налаштування
									</ProfileMenuItem>
								</Menu.Item>
								<Menu.Item>
									<ProfileMenuItem onClick={() => logoutAsync()} isDanger>
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
