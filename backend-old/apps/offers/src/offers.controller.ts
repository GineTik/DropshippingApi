import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { OffersService } from './offers.service'

@Controller('api')
export class OffersController {
	constructor(private readonly goodsService: OffersService) {}

	@Get()
	async getHello() {
		return 'Hello World!'
	}

	@Get('goods/{supplier}/filtered')
	async getFiltered(@Param('supplier') supplier) {
		return this.goodsService.getFiltered(supplier)
	}

	@Get('goods/{supplier}/first')
	async getFirst(@Param('supplier') supplier) {
		return this.goodsService.getFirst(supplier)
	}

	@Get('goods/{supplier}/extract/{field-name}/{operation}')
	async getExtract(
		@Param('supplier') supplier,
		@Param('field-name') fieldName,
		@Param('operation') operation
	) {
		return this.goodsService.getExtract(supplier, fieldName, operation)
	}

	@Get('orders')
	async getOrders() {
		return this.goodsService.getOrders()
	}

	@Post('orders/add')
	async addOrder(@Body() order) {
		return this.goodsService.addOrder()
	}
}
