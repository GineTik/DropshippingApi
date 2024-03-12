import { JwtAuthGuard } from '@app/auth'
import { WebsiteLink } from '@app/models'
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { YmlCatalogLink } from '../../../libs/models/src/user/model-inners/yml-link'
import { SupplierSettingsDto } from './dto/supplier-settings.dto'
import { SupplierService } from './supplier.service'

@UseGuards(JwtAuthGuard)
@Controller('supplier')
export class SupplierController {
	constructor(private readonly supplierService: SupplierService) {}

	@Post('change-settings')
	async changeSettings(
		@Req() request: Express.Request,
		@Body() settings: SupplierSettingsDto
	) {
		try {
			return this.supplierService.changeSettings(
				request['user']['_id'],
				settings
			)
		} catch (e) {
			console.log(e)
		}
	}

	@Post('change-public-name')
	async changePublicName(
		@Req() request: Express.Request,
		@Body('content') name: string
	) {
		return this.supplierService.changePublicName(request['user']['_id'], name)
	}

	@Post('change-api-name')
	async changeApiName(
		@Req() request: Express.Request,
		@Body('content') name: string
	) {
		return this.supplierService.changeApiName(request['user']['_id'], name)
	}

	@Post('change-description')
	async changeDescription(
		@Req() request: Express.Request,
		@Body('content') description: string
	) {
		return this.supplierService.changeDescription(
			request['user']['_id'],
			description
		)
	}

	@Post('add-link')
	async addLink(@Req() request: Express.Request, @Body() link: WebsiteLink) {
		return this.supplierService.addLink(request['user']['_id'], link)
	}

	@Post('remove-link')
	async removeLink(
		@Req() request: Express.Request,
		@Body('content') url: string
	) {
		return this.supplierService.removeLink(request['user']['_id'], url)
	}

	@Post('change-yml-type')
	async changeYmlType(
		@Req() request: Express.Request,
		@Body('content') type: string
	) {
		return this.supplierService.changeYmlType(request['user']['_id'], type)
	}

	@Post('change-yml-catalog-link')
	async changeYmlCatalogLink(
		@Req() request: Express.Request,
		@Body() ymlLink: YmlCatalogLink
	) {
		return this.supplierService.changeYmlCatalogLink(
			request['user']['_id'],
			ymlLink
		)
	}
}
