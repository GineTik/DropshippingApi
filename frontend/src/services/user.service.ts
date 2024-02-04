import $api from "./api"

export const UserService = { 
    async getProfile() {
        return await $api.get('user/profile')
    }
}