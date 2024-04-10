import { AuthDto } from '@/dtos/user/auth.dto'
import { ConfirmChangePasswordDto } from '@/dtos/user/confirm-change-password.dto'
import { SuccessAuthDto } from '@/dtos/user/success-auth.dto'
import { AxiosResponse } from 'axios'
import $api from './api'

export const AuthService = {
	async login(dto: AuthDto): Promise<AxiosResponse<SuccessAuthDto>> {
		return await $api.post<SuccessAuthDto>('auth/login', dto)
	},

	async registrationDropshipper(
		dto: AuthDto
	): Promise<AxiosResponse<SuccessAuthDto>> {
		return await $api.post<SuccessAuthDto>('auth/registration-dropshipper', dto)
	},

	async registrationSupplier(
		dto: AuthDto
	): Promise<AxiosResponse<SuccessAuthDto>> {
		return await $api.post<SuccessAuthDto>('auth/registration-supplier', dto)
	},

	async activate(activationCode: number) {
		return await $api.post(`auth/activate/${activationCode}`)
	},

	refreshUrl: 'auth/refresh',
	async refresh() {
		return await $api.post(this.refreshUrl)
	},

	async logout() {
		return await $api.post('auth/logout')
	},

	async sendChangePasswordRequest() {
		return await $api.post('auth/change-password-request')
	},

	async confirmChangePassword(dto: ConfirmChangePasswordDto) {
		return await $api.post('auth/confirm-change-password', dto)
	},

	async test() {
		return await $api.get('auth/test')
	}
}
