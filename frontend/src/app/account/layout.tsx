import RequireAuthMiddleware from '@/middlewares/RequireAuthMiddleware'

const AccountLayout = ({ children }: any) => {
	return <RequireAuthMiddleware>{children}</RequireAuthMiddleware>
}

export default AccountLayout
