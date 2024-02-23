import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { OffersUnloaderController } from './offers-unloader.controller'
import { OffersUnloaderService } from './offers-unloader.service'

@Module({
	imports: [
		ScheduleModule.forRoot(),
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.env', './apps/offers-unloader/.env']
		})
	],
	controllers: [OffersUnloaderController],
	providers: [OffersUnloaderService]
})
export class OffersUnloaderModule {}
