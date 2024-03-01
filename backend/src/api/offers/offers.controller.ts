import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { OffersService } from './offers.service'

@Controller('api')
export class OffersController {
	constructor(private readonly offersService: OffersService) {}

	@Get()
	async getHello() {
		return 'Hello World!'
	}

	@Get('goods/{supplier}/filtered')
	async getFiltered(@Param('supplier') supplier) {
		return this.offersService.getFiltered(supplier)
	}

	@Get('goods/{supplier}/first')
	async getFirst(@Param('supplier') supplier) {
		return this.offersService.getFirst(supplier)
	}

	@Get('goods/{supplier}/extract/{field-name}/{operation}')
	async getExtract(
		@Param('supplier') supplier,
		@Param('field-name') fieldName,
		@Param('operation') operation
	) {
		return this.offersService.getExtract(supplier, fieldName, operation)
	}

	@Get('orders')
	async getOrders() {
		return this.offersService.getOrders()
	}

	@Post('orders/add')
	async addOrder(@Body() order) {
		return this.offersService.addOrder()
	}
}
