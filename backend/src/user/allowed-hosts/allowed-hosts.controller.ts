import { Body, Controller, Get, HttpCode, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/token/access-token.guard';
import { AllowedHostsService } from './allowed-hosts.service';
import { AddAllowedHostDto } from './dto/add-allowed-host.dto';
import { UpdateAllowedHostDto } from './dto/update-allowed-host.dto';

@UseGuards(JwtAuthGuard)
@Controller('user/allowed-hosts')
export class AllowedHostsController {
  constructor(private readonly allowedHostsService: AllowedHostsService) {}

  @Get()
  async getApiKeys(@Req() request: Express.Request) {
    return await this.allowedHostsService.getAll(request.user['_id'])
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('add')
  async addAllowedHost(@Body() dto: AddAllowedHostDto, @Req() request: Express.Request) {
    return await this.allowedHostsService.add(request.user['_id'], dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('update')
  async updateAllowedHost(@Body() dto: UpdateAllowedHostDto, @Req() request: Express.Request) {
    return await this.allowedHostsService.update(request.user['_id'], dto)
  }

  @HttpCode(200)
  @Post('delete')
  async deleteAllowedHost(@Body('host') host: string, @Req() request: Express.Request) {
    return await this.allowedHostsService.delete(request.user['_id'], host)
  }
}
