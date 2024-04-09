import { prop } from '@typegoose/typegoose'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'
import { Types } from 'mongoose'

export interface OfferModel extends Base {}

export class OfferModel {
	@prop({ type: Types.ObjectId, required: true, ref: 'user' })
	user: Types.ObjectId

	@prop()
	data: Record<string, any>
}
