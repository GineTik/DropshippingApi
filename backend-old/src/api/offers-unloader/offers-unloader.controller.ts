import { Controller } from '@nestjs/common';
import { OffersUnloaderService } from './offers-unloader.service';

@Controller('offers-unloader')
export class OffersUnloaderController {
  constructor(private readonly offersUnloaderService: OffersUnloaderService) {}
}
