import { Controller, Get } from '@nestjs/common';
import { OffersUnloaderService } from './offers-unloader.service';

@Controller()
export class OffersUnloaderController {
  constructor(private readonly offersUnloaderService: OffersUnloaderService) {}

  @Get()
  getHello(): string {
    return this.offersUnloaderService.getHello();
  }
}
