import { Injectable } from '@nestjs/common'

@Injectable()
export class OffersService {
	async getFiltered(supplier: string) {
		return { goods: [] }
	}

	async getFirst(supplier: string) {
		return { commodity: {} }
	}

	async getExtract(supplier: string, fieldName: string, operation: string) {
		return {}
	}

	async getOrders() {
		return { orders: [] }
	}

	async addOrder() {}
}
