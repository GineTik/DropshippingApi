import { OfferModel } from '@app/models/offers'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UpdateOffersService {
	updateAll(offers: OfferModel[]) {
		console.log(offers[0])
		console.log(offers.length)
	}
}
