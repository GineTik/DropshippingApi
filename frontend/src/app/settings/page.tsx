import SettingsPage from '@/components/Account/Settings/SettingsPage'
import RequireAuthMiddleware from '@/middlewares/RequireAuthMiddleware'

const page = () => {
	return (
		<RequireAuthMiddleware>
			<SettingsPage />
		</RequireAuthMiddleware>
	)
}

export default page
