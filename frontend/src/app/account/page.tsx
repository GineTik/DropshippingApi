'use client'
import AccountPage from '@/components/Account/Main/AccountPage'
import { StateType } from '@/store/store'
import { redirect } from 'next/navigation'
import { useSelector } from 'react-redux'
import RouteConstants from '../../../constants/RouteConstants'

const page = () => {
	const { auth } = useSelector((state: StateType) => state)

	if (!auth.user || (auth.user && !auth.user.isActivated)) {
		return redirect(RouteConstants.Login)
	}

	return <AccountPage />
}

export default page
