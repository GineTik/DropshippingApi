import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './models/user.model';
import { UserProfileDto } from './user-profile.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) {}

    async getProfile(_id: Types.ObjectId): Promise<UserProfileDto> {
        const user = await this.userModel.findOne({ _id })
        return new UserProfileDto(user)
    }
}
