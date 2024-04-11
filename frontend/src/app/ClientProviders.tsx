'use client'
import MinWidthMiddleware from '@/middlewares/MinWidthMiddleware'
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
		<MinWidthMiddleware>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<PersistGate loading={null} persistor={persistor}>
						<RefreshTokensMiddleware>{children}</RefreshTokensMiddleware>
					</PersistGate>
				</QueryClientProvider>
			</Provider>
		</MinWidthMiddleware>
	)
}

export default ClientProviders
