import { authSlice } from '@/store/auth/auth.slice'
import { store } from '@/store/store'
import axios from 'axios'
import { AuthService } from './auth.service'

export const API_URL = process.env.NEXT_PUBLIC_SERVER_URL + '/api'

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL
})

$api.interceptors.request.use((config) => {
	const accessToken = store.getState().auth.accessToken
	config.headers.Authorization = `Bearer ${accessToken}`
	return config
})

$api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config
		const status = error.response?.status
		const url = originalRequest.url

		if (url !== AuthService.refreshUrl && (status === 401 || status === 403)) {
			const { data, status } = await AuthService.refresh()
			if (status >= 400) return Promise.reject(error)

			store.dispatch(authSlice.actions.login(data))
			return $api(originalRequest)
		}

		return Promise.reject(error)
	}
)

export default $api
