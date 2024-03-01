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
exports.AllowedHostsController = void 0;
const common_1 = require("@nestjs/common");
const access_token_guard_1 = require("../../auth/token/access-token.guard");
const allowed_hosts_service_1 = require("./allowed-hosts.service");
const add_allowed_host_dto_1 = require("./dto/add-allowed-host.dto");
const update_allowed_host_dto_1 = require("./dto/update-allowed-host.dto");
let AllowedHostsController = class AllowedHostsController {
    constructor(allowedHostsService) {
        this.allowedHostsService = allowedHostsService;
    }
    async getApiKeys(request) {
        return await this.allowedHostsService.getAll(request.user['_id']);
    }
    async addAllowedHost(dto, request) {
        return await this.allowedHostsService.add(request.user['_id'], dto);
    }
    async updateAllowedHost(dto, request) {
        return await this.allowedHostsService.update(request.user['_id'], dto);
    }
    async deleteAllowedHost(host, request) {
        return await this.allowedHostsService.delete(request.user['_id'], host);
    }
};
exports.AllowedHostsController = AllowedHostsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AllowedHostsController.prototype, "getApiKeys", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_allowed_host_dto_1.AddAllowedHostDto, Object]),
    __metadata("design:returntype", Promise)
], AllowedHostsController.prototype, "addAllowedHost", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_allowed_host_dto_1.UpdateAllowedHostDto, Object]),
    __metadata("design:returntype", Promise)
], AllowedHostsController.prototype, "updateAllowedHost", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)('host')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AllowedHostsController.prototype, "deleteAllowedHost", null);
exports.AllowedHostsController = AllowedHostsController = __decorate([
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('user/allowed-hosts'),
    __metadata("design:paramtypes", [allowed_hosts_service_1.AllowedHostsService])
], AllowedHostsController);
//# sourceMappingURL=allowed-hosts.controller.js.map