import { OFFER, USER } from '@app/constants/models-metadata.constants'
import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { TypegooseModule } from 'nestjs-typegoose'
import { OffersUnloaderController } from './offers-unloader.controller'
import { OffersUnloaderService } from './offers-unloader.service'
import { YmlCatalogParser } from './yml-parser/yml.parser'

@Module({
	imports: [
		ScheduleModule.forRoot(),
		TypegooseModule.forFeature([
			{
				typegooseClass: USER.MODEL,
				schemaOptions: {
					collection: USER.NAME
				}
			},
			{
				typegooseClass: OFFER.MODEL,
				schemaOptions: {
					collection: OFFER.NAME
				}
			}
		])
	],
	controllers: [OffersUnloaderController],
	providers: [OffersUnloaderService, YmlCatalogParser]
})
export class OffersUnloaderModule {}