'use client'
import AuthPage from '@/components/Authentication/AuthPage'
import { StateType } from '@/store/store'
import { useParams, useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import RouteConstants from '../../../../constants/RouteConstants'

const page = () => {
	const { type } = useParams<{ type: 'login' | 'registration' }>()
	const { user } = useSelector((state: StateType) => state.auth)
	const router = useRouter()

	if (user && user.isActivated) {
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
