import { Body, Controller, HttpCode, Param, Post, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { JwtAuthGuard } from './token/access-token.guard';

@Controller('auth')
export class AuthController {
  private AGE_30D = 30 * 24 * 60 * 60 * 1000

  constructor(private readonly authService: AuthService) {}

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
  async logout(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    const { refreshToken } = request.cookies
    await this.authService.logout(refreshToken)
    response.clearCookie('refreshToken')
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
  
  private saveRefreshTokenToCookie(response: Response, refreshToken: string) {
    response.cookie('refreshToken', refreshToken, { maxAge: this.AGE_30D, httpOnly: true });
  }
}
