import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/token/access-token.guard';
import { ApiKeyDto } from './dtos/api-key.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() request: Express.Request) {
    return await this.userService.getProfile(request.user['_id'])
  }

  @UseGuards(JwtAuthGuard)
  @Get('api-keys')
  async getApiKeys(@Req() request: Express.Request) {
    return await this.userService.getApiKeys(request.user['_id'])
  }

  @UseGuards(JwtAuthGuard)
  @Post('api-keys/create')
  async createApiKey(@Body() dto: ApiKeyDto, @Req() request: Express.Request) {
    return await this.userService.createApiKey(request.user['_id'], dto)
  }

  @UseGuards(JwtAuthGuard)
  @Post('api-keys/refresh/')
  async refreshApiKey(@Body('apiKey') apiKey: string, @Req() request: Express.Request) {
    return await this.userService.refreshApiKey(request.user['_id'], apiKey)
  }

  @UseGuards(JwtAuthGuard)
  @Post('api-keys/delete')
  async deleteApiKey(@Body('apiKey') apiKey: string, @Req() request: Express.Request) {
    return await this.userService.deleteApiKey(request.user['_id'], apiKey)
  }

  @UseGuards(JwtAuthGuard)
  @Get('api-keys/max-count')
  async getMaxCountOfApiKeys(@Req() request: Express.Request) {
    return await this.userService.getMaxCountOfApiKeys(request.user['_id'])
  }
}
