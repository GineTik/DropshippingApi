'use client'
import RouteConstants from '@/../constants/RouteConstants'
import UserLogo from '@/../public/UserLogo.png'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { StateType } from '@/store/store'
import { Menu, Transition } from '@headlessui/react'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Buttons } from '../buttons'
import styles from './Header.module.scss'
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
						<Buttons.Emerging className={styles.header_profile}>
							<Image
								src={UserLogo.src}
								alt="User"
								width={40}
								height={40}
								className="mr-3"
							/>
							<div className="mr-1">
								<div className={styles.header_profile_email}>
									{user?.email}
								</div>
								<div className={styles.header_profile_subscribe}>
									Немає підписки
								</div>
							</div>
						</Buttons.Emerging>
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
						<Menu.Items className={styles.header_profile_menu}>
							<div>
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
				<div className='flex gap-2'>
					{pathname != RouteConstants.Login && (
						<Buttons.Secondary
							as={Link}
							href={RouteConstants.Login}
						>
							Вхід
						</Buttons.Secondary>
					)}
					{pathname != RouteConstants.Registration && (
						<Buttons.PrimaryHeader 
							as={Link}
							href={RouteConstants.Registration}
						>
							Реєстрація
						</Buttons.PrimaryHeader>
					)}
				</div>
			)}
		</div>
	)
}

export default HeaderAuthentication
