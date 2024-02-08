import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/token/access-token.guard';
import { ApiKeysService } from './api-keys.service';
import { ApiKeyDto } from './dto/api-key.dto';

@Controller('user/api-keys')
export class ApiKeysController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getApiKeys(@Req() request: Express.Request) {
    return await this.apiKeysService.getApiKeys(request.user['_id'])
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createApiKey(@Body() dto: ApiKeyDto, @Req() request: Express.Request) {
    return await this.apiKeysService.createApiKey(request.user['_id'], dto)
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  async refreshApiKey(@Body('apiKey') apiKey: string, @Req() request: Express.Request) {
    return await this.apiKeysService.refreshApiKey(request.user['_id'], apiKey)
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteApiKey(@Body('apiKey') apiKey: string, @Req() request: Express.Request) {
    return await this.apiKeysService.deleteApiKey(request.user['_id'], apiKey)
  }
}
