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
exports.AllowedHostsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const HttpExceptionMessages_1 = require("../../constants/HttpExceptionMessages");
const user_model_1 = require("../models/user.model");
const allowed_host_model_1 = require("./models/allowed-host.model");
let AllowedHostsService = class AllowedHostsService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getAll(_id) {
        const user = await this.getUser(_id);
        return user.allowedHosts;
    }
    async add(_id, dto) {
        const user = await this.getUser(_id);
        if (user.allowedHosts.some(v => v.host === dto.host))
            throw new common_1.BadRequestException(HttpExceptionMessages_1.HostMessages.AlreadyAllowed);
        if (user.allowedHosts.length >= user.limitOfApiKeysAndHosts)
            throw new common_1.BadRequestException(HttpExceptionMessages_1.HostAndKeysMessages.Limit);
        const allowedHost = allowed_host_model_1.AllowedHostModel.fromAddDto(dto);
        await user.updateOne({ $push: { "allowedHosts": allowedHost } });
    }
    async update(_id, updateDto) {
        const newAllowedHost = allowed_host_model_1.AllowedHostModel.fromUpdateDto(updateDto);
        const { modifiedCount } = await this.userModel.updateOne({ _id, "allowedHosts.host": updateDto.oldHost }, { "$set": { "allowedHosts.$": newAllowedHost } });
        if (modifiedCount === 0)
            throw new common_1.HttpException(HttpExceptionMessages_1.HostMessages.NotExists, 400);
    }
    async delete(_id, host) {
        const { modifiedCount } = await this.userModel.updateOne({ _id }, { "$pull": { "allowedHosts": { host } } });
        if (modifiedCount === 0)
            throw new common_1.BadRequestException(HttpExceptionMessages_1.HostMessages.DeletionFailed);
    }
    async getUser(_id) {
        const user = await this.userModel.findOne({ _id });
        if (!user)
            throw new common_1.UnauthorizedException(HttpExceptionMessages_1.UserMessages.InvalidId);
        return user;
    }
};
exports.AllowedHostsService = AllowedHostsService;
exports.AllowedHostsService = AllowedHostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [Object])
], AllowedHostsService);
//# sourceMappingURL=allowed-hosts.service.js.map