import { MicroservicesEndpoints, OFFERS } from '@app/microservices'
import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Cron } from '@nestjs/schedule'
import axios from 'axios'
import * as Xml2js from 'xml2js'
import { YMLCatalogLinks } from './constants/supplier-yml-catalogs.constants'
import { YmlCatalog } from './types/yml.types'
import { YmlCatalogParser } from './yml-parser/yml.parser'

@Injectable()
export class OffersUnloaderService {
	constructor(
		private readonly ymlParser: YmlCatalogParser,
		@Inject(OFFERS) private readonly offersService: ClientProxy
	) {}

	getHello(): string {
		return 'Hello World!'
	}

	@Cron('0 * * * * *', {
		name: 'get actual goods',
		timeZone: 'Europe/Kiev'
	})
	async getGoodsFromYml() {
		const response = await axios.get(YMLCatalogLinks['ager'])
		const xmlData = response.data
		const parser = new Xml2js.Parser({
			trim: true,
			explicitArray: false,
			mergeAttrs: true
		})
		const ymlCatalog: YmlCatalog = (await parser.parseStringPromise(xmlData))
			?.yml_catalog

		const offers = this.ymlParser.parse(ymlCatalog)

		console.log(offers.length)
		this.offersService
			.emit(MicroservicesEndpoints.updateOffers, offers[0])
			.subscribe((_) => {
				console.log('updated')
			})
	}
}
