import { Module } from '@nestjs/common'
import { UpdateOffersController } from './update-offers.controller'
import { UpdateOffersService } from './update-offers.service'

@Module({
	controllers: [UpdateOffersController],
	providers: [UpdateOffersService]
})
export class UpdateOffersModule {}
