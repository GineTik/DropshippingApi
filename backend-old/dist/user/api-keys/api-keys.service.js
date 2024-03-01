"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeysService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const HttpExceptionMessages_1 = require("../../constants/HttpExceptionMessages");
const user_model_1 = require("../models/user.model");
const api_key_model_1 = require("./models/api-key.model");
let ApiKeysService = class ApiKeysService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getAll(_id) {
        const user = await this.getUser(_id);
        return user.apiKeys;
    }
    async create(_id, dto) {
        const user = await this.getUser(_id);
        if (user.apiKeys.length >= user.limitOfApiKeysAndHosts)
            throw new common_1.BadRequestException(HttpExceptionMessages_1.HostAndKeysMessages.Limit);
        const apiKey = api_key_model_1.ApiKeyModel.fromDto(dto);
        await this.userModel.updateOne({ _id }, { $push: { "apiKeys": apiKey } });
        return apiKey;
    }
    async update(_id, dto) {
        const newModel = api_key_model_1.ApiKeyModel.fromUpdateDto(dto);
        const { modifiedCount } = await this.userModel.updateOne({ _id, "apiKeys.key": dto.key }, { "$set": { "apiKeys.$": newModel } });
        if (modifiedCount === 0)
            throw new common_1.BadRequestException(HttpExceptionMessages_1.ApiKeyMessages.NotExists);
    }
    async refresh(_id, apiKey) {
        const newApiKey = crypto.randomUUID();
        const { modifiedCount } = await this.userModel.updateOne({ _id, "apiKeys.key": apiKey }, { "$set": { "apiKeys.$.key": newApiKey } });
        if (modifiedCount === 0)
            throw new common_1.BadRequestException(HttpExceptionMessages_1.ApiKeyMessages.Invalid);
        return newApiKey;
    }
    async delete(_id, apiKey) {
        const { modifiedCount } = await this.userModel.updateOne({ _id }, { "$pull": { "apiKeys": { key: apiKey } } });
        if (modifiedCount === 0)
            throw new common_1.BadRequestException(HttpExceptionMessages_1.ApiKeyMessages.DeletionFailed);
    }
    async getUser(_id) {
        const user = await this.userModel.findOne({ _id });
        if (!user)
            throw new common_1.UnauthorizedException(HttpExceptionMessages_1.UserMessages.InvalidId);
        return user;
    }
};
exports.ApiKeysService = ApiKeysService;
exports.ApiKeysService = ApiKeysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [Object])
], ApiKeysService);
//# sourceMappingURL=api-keys.service.js.map