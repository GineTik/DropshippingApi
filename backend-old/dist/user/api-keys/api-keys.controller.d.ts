/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
import { ApiKeysService } from './api-keys.service';
import { ApiKeyDto } from './dto/api-key.dto';
import { UpdateApiKeyDto } from './dto/update-api-key.dto';
export declare class ApiKeysController {
    private readonly apiKeysService;
    constructor(apiKeysService: ApiKeysService);
    getAll(request: Express.Request): Promise<import("./models/api-key.model").ApiKeyModel[]>;
    create(dto: ApiKeyDto, request: Express.Request): Promise<import("./models/api-key.model").ApiKeyModel>;
    update(dto: UpdateApiKeyDto, request: Express.Request): Promise<void>;
    refresh(apiKey: string, request: Express.Request): Promise<`${string}-${string}-${string}-${string}-${string}`>;
    delete(apiKey: string, request: Express.Request): Promise<void>;
}
