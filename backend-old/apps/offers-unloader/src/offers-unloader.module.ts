import { OFFERS } from '@app/microservices'
import { RabbitMqModule } from '@app/microservices/rabbitmq.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { OffersUnloaderController } from './offers-unloader.controller'
import { OffersUnloaderService } from './offers-unloader.service'
import { YmlCatalogParser } from './yml-parser/yml.parser'

@Module({
	imports: [
		ScheduleModule.forRoot(),
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.env', './apps/offers-unloader/.env']
		}),
		RabbitMqModule.register({
			name: OFFERS
		})
	],
	controllers: [OffersUnloaderController],
	providers: [OffersUnloaderService, YmlCatalogParser]
})
export class OffersUnloaderModule {}
