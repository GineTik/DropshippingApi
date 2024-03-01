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
exports.ApiKeysController = void 0;
const common_1 = require("@nestjs/common");
const access_token_guard_1 = require("../../auth/token/access-token.guard");
const api_keys_service_1 = require("./api-keys.service");
const api_key_dto_1 = require("./dto/api-key.dto");
const update_api_key_dto_1 = require("./dto/update-api-key.dto");
let ApiKeysController = class ApiKeysController {
    constructor(apiKeysService) {
        this.apiKeysService = apiKeysService;
    }
    async getAll(request) {
        return await this.apiKeysService.getAll(request.user['_id']);
    }
    async create(dto, request) {
        return await this.apiKeysService.create(request.user['_id'], dto);
    }
    async update(dto, request) {
        return await this.apiKeysService.update(request.user['_id'], dto);
    }
    async refresh(apiKey, request) {
        return await this.apiKeysService.refresh(request.user['_id'], apiKey);
    }
    async delete(apiKey, request) {
        return await this.apiKeysService.delete(request.user['_id'], apiKey);
    }
};
exports.ApiKeysController = ApiKeysController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiKeysController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [api_key_dto_1.ApiKeyDto, Object]),
    __metadata("design:returntype", Promise)
], ApiKeysController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_api_key_dto_1.UpdateApiKeyDto, Object]),
    __metadata("design:returntype", Promise)
], ApiKeysController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)('apiKey')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ApiKeysController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)('apiKey')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ApiKeysController.prototype, "delete", null);
exports.ApiKeysController = ApiKeysController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('user/api-keys'),
    __metadata("design:paramtypes", [api_keys_service_1.ApiKeysService])
], ApiKeysController);
//# sourceMappingURL=api-keys.controller.js.map