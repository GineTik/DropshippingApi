import { authSlice } from "@/store/auth/auth.slice";
import { store } from "@/store/store";
import axios from "axios";
import LocalStorageConstants from "../../constants/LocalStorageConstants";
import { AuthService } from "./auth.service";

export const API_URL = 'http://localhost:4200/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(LocalStorageConstants.AccessToken)}`
    return config
})

$api.interceptors.response.use(response => response, async (error) => {
    const originalRequest = error.config
    const status = error.response.status
    console.log(status)
    
    if ((status === 401 || status === 403) && !originalRequest._retry) {
        originalRequest._retry = true
        const { data } = await AuthService.refresh()
        store.dispatch(authSlice.actions.login(data))
        return $api(originalRequest)
    }
    return Promise.reject(error)
})

export default $api;