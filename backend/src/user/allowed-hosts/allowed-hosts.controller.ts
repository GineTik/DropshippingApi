import { Body, Controller, Get, HttpCode, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/token/access-token.guard';
import { AllowedHostsService } from './allowed-hosts.service';
import { AddAllowedHostDto } from './dto/add-allowed-host.dto';
import { UpdateAllowedHostDto } from './dto/update-allowed-host.dto';

@Controller('user/allowed-hosts')
export class AllowedHostsController {
  constructor(private readonly allowedHostsService: AllowedHostsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getApiKeys(@Req() request: Express.Request) {
    return await this.allowedHostsService.getAllowedHosts(request.user['_id'])
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Post('add')
  async addAllowedHost(@Body() dto: AddAllowedHostDto, @Req() request: Express.Request) {
    return await this.allowedHostsService.addAllowedHost(request.user['_id'], dto)
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Post('update')
  async updateAllowedHost(@Body() dto: UpdateAllowedHostDto, @Req() request: Express.Request) {
    return await this.allowedHostsService.updateAllowedHost(request.user['_id'], dto)
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Post('delete')
  async deleteAllowedHost(@Body('host') host: string, @Req() request: Express.Request) {
    return await this.allowedHostsService.deleteAllowedHost(request.user['_id'], host)
  }
}
