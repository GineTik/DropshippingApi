import { OFFER, USER } from '@app/constants/models-metadata.constants'
import { UserModel } from '@app/models'
import { OfferModel } from '@app/models/offers/offer.model'
import { Injectable } from '@nestjs/common'
import { Interval } from '@nestjs/schedule'
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
		@InjectModel(USER.MODEL)
		private readonly userModel: ModelType<UserModel>,
		@InjectModel(OFFER.MODEL)
		private readonly offerModel: ModelType<OfferModel>,
		private readonly ymlParser: YmlCatalogParser
	) {}

	@Interval(5 * 60 * 1000)
	async each5m() {
		console.log('start updating')
		this.getOffersFromYmlLink('5m')
		console.log('success updated')
	}

	@Interval(10 * 60 * 1000)
	async each10m() {
		console.log('start updating')
		this.getOffersFromYmlLink('10m')
		console.log('success updated')
	}

	@Interval(30 * 60 * 1000)
	async each30m() {
		console.log('start updating')
		this.getOffersFromYmlLink('30m')
		console.log('success updated')
	}

	async getOffersFromYmlLink(refreshTime: string) {
		const suppliers = await this.userModel.find({
			type: 'supplier',
			'supplierSettings.ymlLoadType': 'link',
			'supplierSettings.ymlLinkSettings.refreshTime': refreshTime
		})

		suppliers.forEach(async (supplier) => {
			try {
				await this.updateOffers(supplier)
			} catch (e) {
				console.log(e)
			}
		})
	}

	async updateOffers(supplier: UserModel) {
		const offers = await this.getActualOffersFromLink(
			supplier._id,
			supplier.supplierSettings.ymlLinkSettings.url
		)

		const options: any[] = []
		options.push({ deleteMany: { filter: { user: supplier._id } } })
		offers.forEach((o) => {
			options.push({ insertOne: { document: o } })
		})
		const bulkResult = await this.offerModel.bulkWrite(options, {
			ordered: true
		})

		supplier.supplierSettings.offersUpdatedAt = new Date(Date.now())
		console.log(
			`${supplier.supplierSettings.publicName} updated (${bulkResult.insertedCount})`
		)
	}

	async getActualOffersFromLink(supplierId: Types.ObjectId, link: string) {
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
				},
				user: supplierId
			}
		})
	}
}
