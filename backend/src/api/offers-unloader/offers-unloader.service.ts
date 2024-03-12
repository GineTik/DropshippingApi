import {
	AGER,
	DROP_OFFICE,
	MS_DROP
} from '@app/constants/models-metadata.constants'
import { AgerModel, DropOfficeModel, MsDropModel } from '@app/models'
import { BaseOfferModel } from '@app/models/offers/base-offer.model'
import { Injectable } from '@nestjs/common'
import { Timeout } from '@nestjs/schedule'
import { ModelType } from '@typegoose/typegoose/lib/types'
import axios from 'axios'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import * as Xml2js from 'xml2js'
import { YmlCatalog } from './types/yml.type'
import { YmlCatalogParser } from './yml-parser/yml.parser'

@Injectable()
export class OffersUnloaderService {
	constructor(
		private readonly ymlParser: YmlCatalogParser,
		@InjectModel(DropOfficeModel)
		private readonly dropOfficeModel: ModelType<DropOfficeModel>,
		@InjectModel(AgerModel)
		private readonly agerModel: ModelType<AgerModel>,
		@InjectModel(MsDropModel)
		private readonly msDropModel: ModelType<MsDropModel>
	) {}

	// @Cron('0 * * * * *', {
	// 	name: 'get actual goods',
	// 	timeZone: 'Europe/Kiev'
	// })
	// @Interval(3 * 60 * 1000)
	@Timeout(1000)
	async getGoodsFromYml() {
		console.log('start updating')

		await this.updateOffers(this.dropOfficeModel, DROP_OFFICE)
		await this.updateOffers(this.agerModel, AGER)
		await this.updateOffers(this.msDropModel, MS_DROP)

		console.log('success updated')
	}

	async updateOffers(
		model: ModelType<BaseOfferModel>,
		supplier: { NAME: string; LINK: string }
	) {
		const offers = await this.getActualOffersFromLink(supplier.LINK)

		const options: any[] = []
		options.push({ deleteMany: { filter: {} } })
		offers.forEach((o) => {
			options.push({ insertOne: { document: o } })
		})
		const bulkResult = await model.bulkWrite(options, {
			ordered: true
		})

		console.log(`${supplier.NAME} updated (${bulkResult.insertedCount})`)
	}

	async getActualOffersFromLink(link: string) {
		const response = await axios.get(link)
		const xmlData = response.data
		const parser = new Xml2js.Parser({
			trim: true,
			explicitArray: false,
			mergeAttrs: true
		})
		const ymlCatalog: YmlCatalog = (await parser.parseStringPromise(xmlData))
			?.yml_catalog

		return this.ymlParser.parse(ymlCatalog).map((o) => {
			const id = new Types.ObjectId()
			delete o.id
			return {
				_id: id,
				id: id,
				data: {
					id: id,
					...o
				}
			}
		})
	}
}
