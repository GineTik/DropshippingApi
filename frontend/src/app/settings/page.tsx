import RequireAuthMiddleware from '@/middlewares/RequireAuthMiddleware'
import SettingsPage from '../account/components/settings/SettingsPage'

const page = () => {
	return (
		<RequireAuthMiddleware>
			<SettingsPage />
		</RequireAuthMiddleware>
	)
}

export default page
