import { authSlice } from '@/store/auth/auth.slice'
import { store } from '@/store/store'
import axios from 'axios'
import { AuthService } from './auth.service'

export const API_URL = ' http://localhost:5081/api'

const $api = axios.create({
	withCredentials: true,
	baseURL: API_URL
})

$api.interceptors.request.use((config) => {
	const accessToken = store.getState().auth.accessToken
	config.headers.Authorization = `Bearer ${accessToken}`
	return config
})

var refreshed = false

$api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config
		const status = error.response?.status

		console.log(refreshed)
		if ((status === 401 || status === 403) && refreshed === false) {
			refreshed = true
			const { data } = await AuthService.refresh()
			store.dispatch(authSlice.actions.login(data))
			return $api(originalRequest)
		} else {
			refreshed = false
			return Promise.reject(error)
		}
	}
)

export default $api
