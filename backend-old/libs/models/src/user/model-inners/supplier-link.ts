import { prop } from '@typegoose/typegoose'

export class WebsiteLink {
	@prop()
	name: string

	@prop()
	url: string
}
