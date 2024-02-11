'use client'
import Section from '@/components/section/Section'
import { StateType } from '@/store/store'
import { useParams, useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import RouteConstants from '../../../../constants/RouteConstants'
import ActivationCode from '../components/ActivationCodeForm'
import AuthForm from '../components/AuthForm'

const AuthPage = () => {
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

	return (
		<Section className="flex justify-center items-center h-full">
			{user && !user?.isActivated ? (
				<ActivationCode />
			) : (
				<AuthForm type={type} />
			)}
		</Section>
	)
}

export default AuthPage
