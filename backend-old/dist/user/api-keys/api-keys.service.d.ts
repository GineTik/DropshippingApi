/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { UserModel } from '../models/user.model';
import { ApiKeyDto } from './dto/api-key.dto';
import { UpdateApiKeyDto } from './dto/update-api-key.dto';
import { ApiKeyModel } from './models/api-key.model';
export declare class ApiKeysService {
    private readonly userModel;
    constructor(userModel: ModelType<UserModel>);
    getAll(_id: Types.ObjectId): Promise<ApiKeyModel[]>;
    create(_id: Types.ObjectId, dto: ApiKeyDto): Promise<ApiKeyModel>;
    update(_id: Types.ObjectId, dto: UpdateApiKeyDto): Promise<void>;
    refresh(_id: Types.ObjectId, apiKey: string): Promise<`${string}-${string}-${string}-${string}-${string}`>;
    delete(_id: Types.ObjectId, apiKey: string): Promise<void>;
    private getUser;
}
