'use client'
import AccountPage from '@/components/Account/Main/AccountPage'
import RequireAuthMiddleware from '@/middlewares/RequireAuthMiddleware'

const page = () => {
	return (
		<RequireAuthMiddleware>
			<AccountPage />
		</RequireAuthMiddleware>
	)
}

export default page
