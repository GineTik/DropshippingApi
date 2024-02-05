'use client'
import AuthPage from '@/components/Authentication/AuthPage'
import { getState } from '@/store/store'
import { useParams, useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import RouteConstants from '../../../../constants/RouteConstants'

const page = () => {
	const { type } = useParams<{ type: 'login' | 'registration' }>()
	const { auth } = useSelector(getState)
	const router = useRouter()

	if (auth.user && auth.user.isActivated) {
		router.push(RouteConstants.Account)
		return
	}

	if (type !== 'login' && type !== 'registration') {
		router.push(RouteConstants.Login, { scroll: true })
		return
	}

	return <AuthPage type={type} />
}

export default page
