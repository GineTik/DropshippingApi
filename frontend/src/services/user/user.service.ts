import $api from "../api"

export const UserService = { 
    async getProfile() {
        return await $api.get('user/profile')
    },

    async getMaxCountOfApiKeysAndHosts() {
        return await $api.get('user/max-count')
    },
}