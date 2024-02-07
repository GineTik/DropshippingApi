'use client'
import Section from '@/components/Section/Section'
import { getState } from '@/store/store'
import { useSelector } from 'react-redux'
import ActivationCode from './ActivationCode'
import AuthForm from './AuthForm'

interface AuthPageProps {
	type: 'login' | 'registration'
}

const AuthPage = ({ type }: AuthPageProps) => {
	const { auth } = useSelector(getState)

	return (
		<Section className="flex justify-center items-center h-full">
			{auth.user && !auth.user?.isActivated ? (
				<ActivationCode />
			) : (
				<AuthForm type={type} />
			)}
		</Section>
	)
}

export default AuthPage
