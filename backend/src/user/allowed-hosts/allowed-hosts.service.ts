import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { HostAndKeysMessages, HostMessages, UserMessages } from 'src/constants/HttpExceptionMessages';
import { UserModel } from '../models/user.model';
import { AddAllowedHostDto } from './dto/add-allowed-host.dto';
import { UpdateAllowedHostDto } from './dto/update-allowed-host.dto';
import { AllowedHostModel } from './models/allowed-host.model';

@Injectable()
export class AllowedHostsService {
    constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) {}

    async getAll(_id: Types.ObjectId): Promise<AddAllowedHostDto[]> {
        const user = await this.getUser(_id)
        return user.allowedHosts
    }

    async add(_id: Types.ObjectId, dto: AddAllowedHostDto) {
        const user = await this.getUser(_id)

        if (user.allowedHosts.some(v => v.host === dto.host))
            throw new BadRequestException(HostMessages.AlreadyAllowed)

        if (user.allowedHosts.length >= user.limitOfApiKeysAndHosts)
            throw new BadRequestException(HostAndKeysMessages.Limit)

        const allowedHost = AllowedHostModel.fromAddDto(dto)
        await user.updateOne(
            {$push: {"allowedHosts": allowedHost}}
        )
    }

    async update(_id: Types.ObjectId, updateDto: UpdateAllowedHostDto) {
        const newAllowedHost = AllowedHostModel.fromUpdateDto(updateDto)
        const {modifiedCount} = await this.userModel.updateOne(
            {_id, "allowedHosts.host": updateDto.oldHost},
            {"$set": {"allowedHosts.$": newAllowedHost}}
        )

        if (modifiedCount === 0) 
            throw new HttpException(HostMessages.NotExists, 400)
    }

    async delete(_id: Types.ObjectId, host: string) {
        const {modifiedCount} = await this.userModel.updateOne(
            { _id },
            {"$pull": {"allowedHosts": {host}}}
        )

        if (modifiedCount === 0)
            throw new BadRequestException(HostMessages.DeletionFailed)
    }
    
    private async getUser(_id: Types.ObjectId) {
        const user = await this.userModel.findOne({ _id })
        if (!user) throw new UnauthorizedException(UserMessages.InvalidId)
        return user
    }
}