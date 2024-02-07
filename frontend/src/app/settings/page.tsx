import RequireAuthMiddleware from '@/middlewares/RequireAuthMiddleware'
import SettingsPage from '@/pages/Account/Settings/SettingsPage'

const page = () => {
	return (
		<RequireAuthMiddleware>
			<SettingsPage />
		</RequireAuthMiddleware>
	)
}

export default page
