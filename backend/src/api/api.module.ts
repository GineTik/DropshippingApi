import { Module } from '@nestjs/common'
import { OffersUnloaderModule } from './offers-unloader/offers-unloader.module'
import { OffersModule } from './offers/offers.module';

@Module({
	imports: [OffersUnloaderModule, OffersModule]
})
export class ApiModule {}
