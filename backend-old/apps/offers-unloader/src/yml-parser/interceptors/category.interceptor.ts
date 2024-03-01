import { YmlCatalog } from '../../types/yml.types'
import { YmlParseInterceptor } from './interface.interceptor'

export class CategoryParseInterceptor implements YmlParseInterceptor {
	parse(offer: any, ymlCatalog: YmlCatalog) {
		offer.category = this.parseCategory(
			offer.categoryId,
			ymlCatalog.shop.categories.category
		)
		delete offer.categoryId
		return offer
	}

	private parseCategory(categoryId: number, allCategories: any[]) {
		const category = allCategories.find((c) => c.id == categoryId)
		let parentCategory

		if (category.parentId) {
			parentCategory = this.parseCategory(category.parentId, allCategories)
		}

		return {
			id: this.tryConvertId(category.id),
			name: category._,
			parent: parentCategory
		}
	}

	private tryConvertId(id: string) {
		return Number.isNaN(Number(id)) ? id : Number(id)
	}
}
