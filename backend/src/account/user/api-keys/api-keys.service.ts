import {
	ApiKeyMessages,
	HostAndKeysMessages,
	UserMessages
} from '@app/exceptions'
import { ApiKeyModel, UserModel } from '@app/models'
import {
	BadRequestException,
	HttpException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { ApiKeyDto, UpdateApiKeyDto } from './dto'

@Injectable()
export class ApiKeysService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
	) {}

	async getAll(_id: Types.ObjectId): Promise<ApiKeyModel[]> {
		const user = await this.getUser(_id)
		return user.dropshipperSettings.apiKeys
	}

	async create(_id: Types.ObjectId, dto: ApiKeyDto): Promise<ApiKeyModel> {
		const user = await this.getUser(_id)
		if (
			user.dropshipperSettings.apiKeys.length >=
			user.dropshipperSettings.limitOfApiKeysAndHosts
		)
			throw new BadRequestException(HostAndKeysMessages.Limit)

		const apiKey = ApiKeyDto.castToModel(dto)
		await this.userModel.updateOne(
			{ _id },
			{ $push: { 'dropshipperSettings.apiKeys': apiKey } }
		)

		return apiKey
	}

	async update(_id: Types.ObjectId, dto: UpdateApiKeyDto) {
		const newModel = UpdateApiKeyDto.castToModel(dto)
		const { modifiedCount } = await this.userModel.updateOne(
			{ _id, 'dropshipperSettings.apiKeys.key': dto.key },
			{ $set: { 'dropshipperSettings.apiKeys.$': newModel } }
		)

		if (modifiedCount === 0)
			throw new BadRequestException(ApiKeyMessages.NotExists)
	}

	async refresh(_id: Types.ObjectId, apiKey: string) {
		const newApiKey = crypto.randomUUID()
		const { modifiedCount } = await this.userModel.updateOne(
			{ _id, 'dropshipperSettings.apiKeys.key': apiKey },
			{ $set: { 'dropshipperSettings.apiKeys.$.key': newApiKey } }
		)

		if (modifiedCount === 0)
			throw new BadRequestException(ApiKeyMessages.Invalid)

		return newApiKey
	}

	async delete(_id: Types.ObjectId, apiKey: string) {
		const { modifiedCount } = await this.userModel.updateOne(
			{ _id },
			{ $pull: { apiKeys: { key: apiKey } } }
		)

		if (modifiedCount === 0)
			throw new BadRequestException(ApiKeyMessages.DeletionFailed)
	}

	private async getUser(_id: Types.ObjectId) {
		const user = await this.userModel.findOne({ _id })
		if (!user) throw new UnauthorizedException(UserMessages.InvalidId)
		if (user.type != 'dropshipper')
			throw new HttpException(UserMessages.IsNotDropshipper, 400)
		return user
	}
}
