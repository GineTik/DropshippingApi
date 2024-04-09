'use client'
import RefreshTokensMiddleware from '@/middlewares/RefreshMiddleware'
import { persistor, store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

interface ClientProvidersProps {
	children: any
}

const queryClient = new QueryClient()

const ClientProviders = ({ children }: ClientProvidersProps) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<PersistGate loading={null} persistor={persistor}>
					<RefreshTokensMiddleware>{children}</RefreshTokensMiddleware>
				</PersistGate>
			</QueryClientProvider>
		</Provider>
	)
}

export default ClientProviders
