import { AddAllowedHostDto } from "@/dtos/user/allowed-hosts/add-allowed-host.dto"
import { UpdateAllowedHostDto } from "@/dtos/user/allowed-hosts/update-allowed-host.dto"
import $api from "../api"

export const AllowedHostsService = {
    async getAll() {
        return await $api.get('user/allowed-hosts')
    },

    async add(dto: AddAllowedHostDto) {
        return await $api.post('user/allowed-hosts/add', dto)
    },

    async update(dto: UpdateAllowedHostDto) {
        return await $api.post('user/allowed-hosts/update', dto)
    },

    async delete(host: string) {
        return await $api.post('user/allowed-hosts/delete', {
            host
        })
    },
}