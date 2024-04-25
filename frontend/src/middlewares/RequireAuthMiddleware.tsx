'use client'
import { StateType } from '@/store/store'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import RouteConstants from '../../constants/RouteConstants'

interface RequireAuthMiddlewareProps {
	requireRole?: string
	children: any
}

const RequireAuthMiddleware = ({ requireRole, children }: RequireAuthMiddlewareProps) => {
	const { user } = useSelector((state: StateType) => state.auth)
	const router = useRouter()

	const userAuthorized = !user || (user && !user.emailIsConfirmed)
	const roleIsCorrect = (requireRole != null && user.roles.some(o => o.toLowerCase() === requireRole.toLowerCase()))
	
	if (userAuthorized && roleIsCorrect) {
		router.push(RouteConstants.Login)
		return
	}

	return children
}

export default RequireAuthMiddleware
