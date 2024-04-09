import { JwtAuthGuard } from '@app/auth'
import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Post,
	Req,
	Res,
	UseGuards,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { ConfirmChangePasswordDto } from './dto/confirm-change-password.dto'
import { RegistrationDropshipperDto } from './dto/registration-dropshipper.dto'
import { RegistrationSupplierDto } from './dto/registration-supplier.dto'

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {}

	@HttpCode(200)
	@Post('login')
	async login(
		@Body() dto: AuthDto,
		@Res({ passthrough: true }) response: Response
	) {
		const result = await this.authService.login(dto)
		this.saveRefreshTokenToCookie(response, result.refreshToken)
		return result
	}

	@Post('registration-supplier')
	@HttpCode(200)
	async registrationSupplier(
		@Body() dto: RegistrationSupplierDto,
		@Res({ passthrough: true }) response: Response
	) {
		try {
			const result = await this.authService.registrationSupplier(dto)
			this.saveRefreshTokenToCookie(response, result.refreshToken)
			return result
		} catch (e) {
			console.log(e)
		}
	}

	@Post('registration-dropshipper')
	@HttpCode(200)
	async registrationDropshipper(
		@Body() dto: RegistrationDropshipperDto,
		@Res({ passthrough: true }) response: Response
	) {
		try {
			const result = await this.authService.registrationDropshipper(dto)
			this.saveRefreshTokenToCookie(response, result.refreshToken)
			return result
		} catch (e) {
			console.log(e)
		}
	}

	@Post('logout')
	@HttpCode(200)
	async logout(@Res({ passthrough: true }) response: Response) {
		response.clearCookie(this.configService.get('COOKIE_REFRESH_TOKEN_KEY'))
	}

	@UseGuards(JwtAuthGuard)
	@Post('activate/:code')
	@HttpCode(200)
	async activate(@Param('code') code: number, @Req() request: Request) {
		await this.authService.activate(request['user']['_id'], code)
	}

	@Post('refresh')
	async refresh(
		@Req() request: Request,
		@Res({ passthrough: true }) response: Response
	) {
		const { refreshToken } = request.cookies
		const result = await this.authService.refresh(refreshToken)
		this.saveRefreshTokenToCookie(response, result.refreshToken)
		return result
	}

	@UseGuards(JwtAuthGuard)
	@Post('change-password-request')
	async changePassword(@Req() request: Request) {
		await this.authService.changePasswordRequest(request['user']['_id'])
	}

	@UsePipes(new ValidationPipe())
	@UseGuards(JwtAuthGuard)
	@Post('confirm-change-password')
	async confirmChangePassword(
		@Body() confirmChangePasswordDto: ConfirmChangePasswordDto,
		@Req() request: Request
	) {
		await this.authService.confirmChangePassword(
			request['user']['_id'],
			confirmChangePasswordDto
		)
	}

	@UseGuards(JwtAuthGuard)
	@Get('test')
	async test() {
		return 'success'
	}

	private saveRefreshTokenToCookie(response: Response, refreshToken: string) {
		const maxAge =
			Number(
				this.configService.get('SAVE_REFRESH_TOKEN_IN_COOKIE_IN_MINUTES')
			) *
			60 *
			1000

		response.cookie(
			this.configService.get('COOKIE_REFRESH_TOKEN_KEY'),
			refreshToken,
			{ maxAge: maxAge, httpOnly: true }
		)
	}
}
