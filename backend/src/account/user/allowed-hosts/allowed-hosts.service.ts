import {
	HostAndKeysMessages,
	HostMessages,
	UserMessages
} from '@app/exceptions'
import { UserModel } from '@app/models'
import {
	BadRequestException,
	HttpException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { AddAllowedHostDto, UpdateAllowedHostDto } from './allowed-hosts'

@Injectable()
export class AllowedHostsService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
	) {}

	async getAll(_id: Types.ObjectId): Promise<AddAllowedHostDto[]> {
		const user = await this.getUser(_id)
		return user.dropshipperSettings.allowedHosts
	}

	async add(_id: Types.ObjectId, dto: AddAllowedHostDto) {
		const user = await this.getUser(_id)

		if (user.dropshipperSettings.allowedHosts.some((v) => v.host === dto.host))
			throw new BadRequestException(HostMessages.AlreadyAllowed)

		if (
			user.dropshipperSettings.allowedHosts.length >=
			user.dropshipperSettings.limitOfApiKeysAndHosts
		)
			throw new BadRequestException(HostAndKeysMessages.Limit)

		const allowedHost = AddAllowedHostDto.castToModel(dto)
		await user.updateOne({
			$push: { 'dropshipperSettings.allowedHosts': allowedHost }
		})
	}

	async update(_id: Types.ObjectId, updateDto: UpdateAllowedHostDto) {
		const newAllowedHost = UpdateAllowedHostDto.castToModel(updateDto)
		const { modifiedCount } = await this.userModel.updateOne(
			{ _id, 'dropshipperSettings.allowedHosts.host': updateDto.oldHost },
			{ $set: { 'dropshipperSettings.allowedHosts.$': newAllowedHost } }
		)

		if (modifiedCount === 0)
			throw new HttpException(HostMessages.NotExists, 400)
	}

	async delete(_id: Types.ObjectId, host: string) {
		const { modifiedCount } = await this.userModel.updateOne(
			{ _id },
			{ $pull: { allowedHosts: { host } } }
		)

		if (modifiedCount === 0)
			throw new BadRequestException(HostMessages.DeletionFailed)
	}

	private async getUser(_id: Types.ObjectId) {
		const user = await this.userModel.findOne({ _id })
		if (!user) throw new UnauthorizedException(UserMessages.InvalidId)
		if (user.type != 'dropshipper')
			throw new HttpException(UserMessages.UserNotDropshipper, 400)
		return user
	}
}
