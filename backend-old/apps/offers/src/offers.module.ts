import { RabbitMqModule } from '@app/microservices'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { OffersController } from './offers.controller'
import { OffersService } from './offers.service'
import { UpdateOffersModule } from './update-offers/update-offers.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.env', './apps/offers/.env']
		}),
		UpdateOffersModule,
		RabbitMqModule
	],
	controllers: [OffersController],
	providers: [OffersService]
})
export class OffersModule {}
