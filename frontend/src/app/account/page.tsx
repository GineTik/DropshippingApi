'use client'
import AccountPage from '@/components/Account/main/AccountPage'
import { StateType } from '@/store/store'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import RouteConstants from '../../../constants/RouteConstants'

const page = () => {
	const router = useRouter()
	const { auth } = useSelector((state: StateType) => state)

	if (!auth.loggedIn) router.push(RouteConstants.Login)
	return <AccountPage />
}

export default page
