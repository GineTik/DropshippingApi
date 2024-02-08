import { CreateApiKeyDto } from "@/dtos/user/api-key/create-api-key.dto"
import $api from "../api"

export const ApiKeysService = { 
    async getApiKeys() {
        return await $api.get('user/api-keys')
    },

    async createApiKey(dto: CreateApiKeyDto) {
        return await $api.post('user/api-keys/create', dto)
    },

    async refreshApiKey(apiKey: string) {
        return await $api.post('user/api-keys/refresh', {
            apiKey
        })
    },

    async deleteApiKey(apiKey: string) {
        return await $api.post('user/api-keys/delete', {
            apiKey
        })
    },
}