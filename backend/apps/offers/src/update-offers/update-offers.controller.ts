import { MicroservicesEndpoints } from '@app/microservices'
import { Controller, Logger } from '@nestjs/common'
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices'
import { UpdateOffersService } from './update-offers.service'

@Controller()
export class UpdateOffersController {
	constructor(
		private readonly updateOffersService: UpdateOffersService,
		private readonly logger: Logger
	) {}

	@EventPattern(MicroservicesEndpoints.updateOffers)
	update(@Payload() offers: any, @Ctx() context: RmqContext) {
		console.log('success')
		this.logger.log('success')
		return 'result'
		// return this.updateOffersService.updateAll(offers)
	}
}
