import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import HttpExceptionMessages from 'src/constants/HttpExceptionMessages';
import { UserModel } from './models/user.model';
import { UserProfileDto } from './user-profile.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) {}

    async getProfile(_id: Types.ObjectId): Promise<UserProfileDto> {
        const user = await this.userModel.findOne({ _id })
        return new UserProfileDto(user)
    }

    async getMaxCountOfApiKeysAndHosts(_id: Types.ObjectId) {
        const user = await this.getUser(_id)
        return user.limitOfApiKeysAndHosts
    }

    private async getUser(_id: Types.ObjectId) {
        const user = await this.userModel.findOne({ _id })
        if (!user) throw new UnauthorizedException(HttpExceptionMessages.InvalidUserId)
        return user
    }
}
