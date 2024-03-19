import { USER } from '@app/constants'
import { SupplierMessages } from '@app/exceptions'
import { UserModel, WebsiteLink } from '@app/models'
import { UserRepository } from '@app/user'
import { HttpException, Injectable } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { YmlCatalogLink } from '../../../libs/models/src/user/model-inners/yml-link'
import { SupplierSettingsDto } from './dto/supplier-settings.dto'

@Injectable()
export class SupplierService {
	constructor(
		@InjectModel(USER.MODEL) private readonly userModel: ModelType<UserModel>,
		private readonly userRepository: UserRepository
	) {}

	async changeSettings(_id: Types.ObjectId, settings: SupplierSettingsDto) {
		const user = await this.userRepository.getSupplier(_id)
		user.supplierSettings = {
			...user.supplierSettings,
			...settings
		}
		await user.save()
	}

	async changePublicName(_id: Types.ObjectId, name: string) {
		const user = await this.userRepository.getSupplier(_id)
		if (await this.userModel.findOne({ 'supplierSettings.publicName': name }))
			throw new HttpException(SupplierMessages.PublicNameAlreadyExists, 400)

		user.supplierSettings.publicName = name
		await user.save()
	}

	async changeApiName(_id: Types.ObjectId, name: string) {
		const user = await this.userRepository.getSupplier(_id)
		if (await this.userModel.findOne({ 'supplierSettings.apiName': name }))
			throw new HttpException(SupplierMessages.ApiNameAlreadyExists, 400)

		user.supplierSettings.apiName = name
		await user.save()
	}

	async changeDescription(_id: Types.ObjectId, name: string) {
		const user = await this.userRepository.getSupplier(_id)
		user.supplierSettings.description = name
		await user.save()
	}

	async addLink(_id: Types.ObjectId, link: WebsiteLink) {
		const user = await this.userRepository.getSupplier(_id)
		if (user.supplierSettings.links.includes(link))
			throw new HttpException('Link already exists', 400)

		user.supplierSettings.links.push(link)
		await user.save()
	}

	async removeLink(_id: Types.ObjectId, url: string) {
		const user = await this.userRepository.getSupplier(_id)
		if (!user.supplierSettings.links.filter((link) => link.url === url))
			throw new HttpException('Link not exists', 400)

		user.supplierSettings.links = user.supplierSettings.links.filter(
			(link) => link.url !== url
		)
		await user.save()
	}

	async changeYmlType(_id: Types.ObjectId, type: string) {
		const user = await this.userRepository.getSupplier(_id)
		if (type !== 'link' && type !== 'file')
			throw new HttpException(`Invalid yml load type (${type})`, 400)

		user.supplierSettings.ymlLoadType = type
		await user.save()
	}

	async changeYmlCatalogLink(_id: Types.ObjectId, ymlLink: YmlCatalogLink) {
		const user = await this.userRepository.getSupplier(_id)
		user.supplierSettings.ymlLinkSettings = ymlLink
		await user.save()
	}
}
