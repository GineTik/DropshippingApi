import { Body, Controller, Get, HttpCode, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthDto } from './dto/auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post('registration')
  @HttpCode(200)
  async registration(@Body() dto: AuthDto, @Res({ passthrough: true }) response: Response) {
    const result = await this.authService.registration(dto)
    response.cookie('refreshToken', result.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
    return result
  }
  
  @Post('logout')
  async logout() {

  }

  @Get('activate/:link')
  async activate() {

  }

  @Get('refresh')
  async refresh() {

  }
}
