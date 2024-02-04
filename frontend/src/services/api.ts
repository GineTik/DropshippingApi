import axios from "axios";
import LocalStorageConstants from "../../constants/LocalStorageConstants";

export const API_URL = 'http://localhost:4200/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(LocalStorageConstants.AccessToken)}`
    return config
})

export default $api;