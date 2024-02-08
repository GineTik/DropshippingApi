import { AddAllowedHostDto } from "@/dtos/user/allowed-hosts/add-allowed-host.dto"
import { UpdateAllowedHostDto } from "@/dtos/user/allowed-hosts/update-allowed-host.dto"
import $api from "../api"

export const AllowedHostsService = {
    async getAllowedHosts() {
        return await $api.get('user/allowed-hosts')
    },

    async addAllowedHost(dto: AddAllowedHostDto) {
        return await $api.post('user/allowed-hosts/add', dto)
    },

    async updateAllowedHost(dto: UpdateAllowedHostDto) {
        return await $api.post('user/allowed-hosts/update', dto)
    },

    async deleteAllowedHost(host: string) {
        return await $api.post('user/allowed-hosts/delete', {
            host
        })
    },
}