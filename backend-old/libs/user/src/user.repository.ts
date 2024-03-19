import { USER } from '@app/constants'
import { UserMessages } from '@app/exceptions'
import { UserModel } from '@app/models'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { Types } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'

@Injectable()
export class UserRepository {
	constructor(
		@InjectModel(USER.MODEL) private readonly userModel: ModelType<UserModel>
	) {}

	async getSupplier(_id: Types.ObjectId) {
		const user = await this.userModel.findOne({ _id })
		if (!user) throw new UnauthorizedException(UserMessages.InvalidId)
		if (!user.supplierSettings)
			throw new UnauthorizedException(UserMessages.IsNotSupplier)
		return user
	}
}
