import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import HttpExceptionMessages from 'src/constants/HttpExceptionMessages';
import { UserModel } from '../models/user.model';
import { ApiKeyDto } from './dto/api-key.dto';
import { ApiKeyModel } from './models/api-key.model';

@Injectable()
export class ApiKeysService {
    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) {}

    async getApiKeys(_id: Types.ObjectId): Promise<ApiKeyModel[]> {
        const user = await this.getUser(_id)
        return user.apiKeys
    }

    async createApiKey(_id: Types.ObjectId, dto: ApiKeyDto): Promise<ApiKeyModel> {
        const user = await this.getUser(_id)

        if (user.apiKeys.length >= user.limitOfApiKeysAndHosts)
            throw new HttpException(HttpExceptionMessages.LimitOfApiKeysAndHosts, 400)

        const apiKey = ApiKeyModel.fromDto(dto)
        await this.userModel.updateOne(
            {_id},
            {$push: {"apiKeys": apiKey}}
        )
        
        return apiKey
    }

    async refreshApiKey(_id: Types.ObjectId, apiKey: string) {
        const newApiKey = crypto.randomUUID()
        const {modifiedCount} = await this.userModel.updateOne(
            { _id, "apiKeys.key": apiKey },
            {"$set": {"apiKeys.$.key": newApiKey}}
        )

        if (modifiedCount === 0) 
            throw new HttpException(HttpExceptionMessages.InvalidApiKey, 400)
        
        return newApiKey
    }

    async deleteApiKey(_id: Types.ObjectId, apiKey: string) {
        const {modifiedCount} = await this.userModel.updateOne(
            { _id },
            {"$pull": {"apiKeys": {key: apiKey}}}
        )

        if (modifiedCount === 0) 
            throw new HttpException(HttpExceptionMessages.InvalidDeleteOfApiKey, 400)
    }

    private async getUser(_id: Types.ObjectId) {
        const user = await this.userModel.findOne({ _id })
        if (!user) throw new UnauthorizedException(HttpExceptionMessages.InvalidUserId)
        return user
    }
}
