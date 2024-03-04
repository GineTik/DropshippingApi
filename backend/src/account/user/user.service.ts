import { UserMessages } from '@app/exceptions'
import { UserModel } from '@app/models'
import {
	HttpException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { UserProfileDto } from './dto/user-profile.dto'

@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
	) {}

	async getProfile(_id: Types.ObjectId): Promise<UserProfileDto> {
		const user = await this.userModel.findOne({ _id })
		return new UserProfileDto(user)
	}

	async getMaxCountOfApiKeysAndHosts(_id: Types.ObjectId) {
		const user = await this.getUser(_id)
		if (user.type != 'dropshipper')
			throw new HttpException(UserMessages.UserNotDropshipper, 400)
		return user.dropshipperSettings?.limitOfApiKeysAndHosts
	}

	private async getUser(_id: Types.ObjectId) {
		const user = await this.userModel.findOne({ _id })
		if (!user) throw new UnauthorizedException(UserMessages.InvalidId)
		return user
	}
}
