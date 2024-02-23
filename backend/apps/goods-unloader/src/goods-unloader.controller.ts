import { Controller, Get } from '@nestjs/common'
import { GoodsUnloaderService } from './goods-unloader.service'

@Controller()
export class GoodsUnloaderController {
	constructor(private readonly goodsUnloaderService: GoodsUnloaderService) {}

	@Get()
	getHello(): string {
		return this.goodsUnloaderService.getHello()
	}
}
