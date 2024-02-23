import { Injectable } from '@nestjs/common'
import { Cron } from '@nestjs/schedule'
import axios from 'axios'
import * as Xml2js from 'xml2js'
import { YMLCatalogLinks } from './constants/supplier-yml-catalogs.constants'
import { YmlCatalog } from './types/yml.types'

@Injectable()
export class OffersUnloaderService {
	getHello(): string {
		return 'Hello World!'
	}

	@Cron('0 * * * * *', {
		name: 'get actual goods',
		timeZone: 'Europe/Kiev'
	})
	async getGoodsFromYml() {
		const response = await axios.get(YMLCatalogLinks['drop-office'])
		const xmlData = response.data
		const parser = new Xml2js.Parser({
			trim: true,
			explicitArray: false,
			mergeAttrs: true
		})
		const result: YmlCatalog = (await parser.parseStringPromise(xmlData))
			?.yml_catalog

		console.log(result.shop.offers.offer.length)
		console.log(result.shop.offers.offer[0])
	}
}
