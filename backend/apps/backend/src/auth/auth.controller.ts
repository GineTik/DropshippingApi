import { Body, Controller, Get, HttpCode, Param, Post, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { AuthDto } from '../../../../libs/dto/src/user/auth/auth.dto';
import { ConfirmChangePasswordDto } from '../../../../libs/dto/src/user/auth/confirm-change-password.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './token/access-token.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService
  ) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto, @Res({ passthrough: true }) response: Response) {
    const result = await this.authService.login(dto)
    this.saveRefreshTokenToCookie(response, result.refreshToken)
    return result
  }

  @UsePipes(new ValidationPipe())
  @Post('registration')
  @HttpCode(200)
  async registration(@Body() dto: AuthDto, @Res({ passthrough: true }) response: Response) {
    const result = await this.authService.registration(dto)
    this.saveRefreshTokenToCookie(response, result.refreshToken)
    return result
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
    await this.authService.activate(request.user['_id'], code)
  }

  @Post('refresh')
  async refresh(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    const { refreshToken } = request.cookies
    const result = await this.authService.refresh(refreshToken)
    this.saveRefreshTokenToCookie(response, result.refreshToken)
    return result
  }

  @UseGuards(JwtAuthGuard)
  @Post('change-password-request')
  async changePassword(@Req() request: Request) {
    await this.authService.changePasswordRequest(request.user['_id'])
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  @Post('confirm-change-password')
  async confirmChangePassword(@Body() confirmChangePasswordDto: ConfirmChangePasswordDto, @Req() request: Request) {
    await this.authService.confirmChangePassword(request.user['_id'], confirmChangePasswordDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  async test() {
    return 'success'
  }

  private saveRefreshTokenToCookie(response: Response, refreshToken: string) {
    const maxAge = Number(this.configService.get('SAVE_REFRESH_TOKEN_IN_COOKIE_IN_MINUTES')) * 60 * 1000
    
    response.cookie(
      this.configService.get('COOKIE_REFRESH_TOKEN_KEY'), 
      refreshToken, 
      { maxAge: maxAge, httpOnly: true }
    );
  }
}