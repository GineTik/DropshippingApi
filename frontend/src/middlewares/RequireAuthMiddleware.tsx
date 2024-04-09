'use client'
import { StateType } from '@/store/store'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import RouteConstants from '../../constants/RouteConstants'

interface RequireAuthMiddlewareProps {
	children: any
}

const RequireAuthMiddleware = ({ children }: RequireAuthMiddlewareProps) => {
	const { user } = useSelector((state: StateType) => state.auth)
	const router = useRouter()

	if (!user || (user && !user.emailIsConfirmed)) {
		router.push(RouteConstants.Login)
		return
	}

	return children
}

export default RequireAuthMiddleware
