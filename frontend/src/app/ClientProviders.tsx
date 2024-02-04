'use client'
import AuthProvider from '@/providers/AuthProvider'
import { store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'

interface ClientProvidersProps {
	children: any
}

const queryClient = new QueryClient()

const ClientProviders = ({ children }: ClientProvidersProps) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>{children}</AuthProvider>
			</QueryClientProvider>
		</Provider>
	)
}

export default ClientProviders
