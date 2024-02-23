import { ApiKeyDto, UpdateApiKeyDto } from '@app/dto';
import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/token/access-token.guard';
import { ApiKeysService } from './api-keys.service';

@UsePipes(new ValidationPipe())
@UseGuards(JwtAuthGuard)
@Controller('user/api-keys')
export class ApiKeysController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @Get()
  async getAll(@Req() request: Express.Request) {
    return await this.apiKeysService.getAll(request.user['_id'])
  }

  @Post('create')
  async create(@Body() dto: ApiKeyDto, @Req() request: Express.Request) {
    return await this.apiKeysService.create(request.user['_id'], dto)
  }

  @Post('update')
  async update(@Body() dto: UpdateApiKeyDto, @Req() request: Express.Request) {
    return await this.apiKeysService.update(request.user['_id'], dto)
  }

  @Post('refresh')
  async refresh(@Body('apiKey') apiKey: string, @Req() request: Express.Request) {
    return await this.apiKeysService.refresh(request.user['_id'], apiKey)
  }

  @Post('delete')
  async delete(@Body('apiKey') apiKey: string, @Req() request: Express.Request) {
    return await this.apiKeysService.delete(request.user['_id'], apiKey)
  }
}
