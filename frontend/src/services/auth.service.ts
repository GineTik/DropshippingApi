import { AuthDto } from "@/dtos/user/auth.dto";
import { SuccessAuthDto } from "@/dtos/user/success-auth.dto";
import { AxiosResponse } from "axios";
import $api from "./api";

export const AuthService = {
    async login(dto: AuthDto): Promise<AxiosResponse<SuccessAuthDto>> {
        return await $api.post<SuccessAuthDto>('auth/login', dto)
    },
    
    async registration(dto: AuthDto): Promise<AxiosResponse<SuccessAuthDto>> {
        return await $api.post<SuccessAuthDto>('auth/registration', dto)
    },

    async activate(activationCode: number) {
        return await $api.post(`auth/activate/${activationCode}`)
    },

    async refresh() {
        return await $api.post('auth/refresh')
    },

    async test() {
        return await $api.get('auth/test')
    }
}