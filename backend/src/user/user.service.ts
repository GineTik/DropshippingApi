import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import HttpExceptionMessages from 'src/constants/HttpExceptionMessages';
import { ApiKeyDto } from './dtos/api-key.dto';
import { ApiKeyModel } from './models/api-key.model';
import { UserModel } from './models/user.model';
import { UserProfileDto } from './user-profile.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) {}

    async getProfile(_id: Types.ObjectId): Promise<UserProfileDto> {
        const user = await this.userModel.findOne({ _id })
        return new UserProfileDto(user)
    }

    async getApiKeys(_id: Types.ObjectId): Promise<ApiKeyModel[]> {
        const user = await this.getUser(_id)
        return user.apiKeys.keys
    }

    async createApiKey(_id: Types.ObjectId, dto: ApiKeyDto): Promise<ApiKeyModel> {
        const user = await this.getUser(_id)

        if (user.apiKeys.keys.length >= user.apiKeys.maxCount)
            throw new HttpException(HttpExceptionMessages.CountOfApiKeysIsFulled, 400)

        const apiKey: ApiKeyModel = {
            ...dto,
            key: crypto.randomUUID()
        }

        await this.userModel.updateOne(
            {_id},
            {$push: {"apiKeys.keys": apiKey}}
        )
        
        return apiKey
    }

    async refreshApiKey(_id: Types.ObjectId, apiKey: string) {
        const newApiKey = crypto.randomUUID()
        const {modifiedCount} = await this.userModel.updateOne(
            { _id, "apiKeys.keys.key": apiKey },
            {"$set": {"apiKeys.keys.$.key": newApiKey}}
        )

        if (modifiedCount === 0) 
            throw new HttpException(HttpExceptionMessages.InvalidApiKey, 400)
        
        return newApiKey
    }

    async deleteApiKey(_id: Types.ObjectId, apiKey: string) {
        const {modifiedCount} = await this.userModel.updateOne(
            { _id },
            {"$pull": {"apiKeys.keys": {key: apiKey}}}
        )

        if (modifiedCount === 0) 
            throw new HttpException(HttpExceptionMessages.InvalidDeleteOfApiKey, 400)
    }

    async getMaxCountOfApiKeys(_id: Types.ObjectId) {
        const user = await this.getUser(_id)
        return user.apiKeys.maxCount
    }

    private async getUser(_id: Types.ObjectId) {
        const user = await this.userModel.findOne({ _id })
        if (!user) throw new UnauthorizedException(HttpExceptionMessages.InvalidUserId)
        return user
    }
}
