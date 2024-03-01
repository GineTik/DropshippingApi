import { prop } from '@typegoose/typegoose'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'

export interface BaseOfferModel extends Base {}

export class BaseOfferModel {
	@prop()
	data: Record<string, any>
}
