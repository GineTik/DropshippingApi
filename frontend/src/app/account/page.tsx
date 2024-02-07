'use client'
import RequireAuthMiddleware from '@/middlewares/RequireAuthMiddleware'
import AccountPage from '@/pages/Account/AccountPage'

const page = () => {
	return (
		<RequireAuthMiddleware>
			<AccountPage />
		</RequireAuthMiddleware>
	)
}

export default page
