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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./dto/auth.dto");
const confirm_change_password_dto_1 = require("./dto/confirm-change-password.dto");
const access_token_guard_1 = require("./token/access-token.guard");
let AuthController = class AuthController {
    constructor(authService, configService) {
        this.authService = authService;
        this.configService = configService;
    }
    async login(dto, response) {
        const result = await this.authService.login(dto);
        this.saveRefreshTokenToCookie(response, result.refreshToken);
        return result;
    }
    async registration(dto, response) {
        const result = await this.authService.registration(dto);
        this.saveRefreshTokenToCookie(response, result.refreshToken);
        return result;
    }
    async logout(response) {
        response.clearCookie(this.configService.get('COOKIE_REFRESH_TOKEN_KEY'));
    }
    async activate(code, request) {
        await this.authService.activate(request.user['_id'], code);
    }
    async refresh(request, response) {
        const { refreshToken } = request.cookies;
        const result = await this.authService.refresh(refreshToken);
        this.saveRefreshTokenToCookie(response, result.refreshToken);
        return result;
    }
    async changePassword(request) {
        await this.authService.changePasswordRequest(request.user['_id']);
    }
    async confirmChangePassword(confirmChangePasswordDto, request) {
        await this.authService.confirmChangePassword(request.user['_id'], confirmChangePasswordDto);
    }
    async test() {
        return 'success';
    }
    saveRefreshTokenToCookie(response, refreshToken) {
        const maxAge = Number(this.configService.get('SAVE_REFRESH_TOKEN_IN_COOKIE_IN_MINUTES')) * 60 * 1000;
        response.cookie(this.configService.get('COOKIE_REFRESH_TOKEN_KEY'), refreshToken, { maxAge: maxAge, httpOnly: true });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)('registration'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registration", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Post)('activate/:code'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "activate", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Post)('change-password-request'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Post)('confirm-change-password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [confirm_change_password_dto_1.ConfirmChangePasswordDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "confirmChangePassword", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Get)('test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "test", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        config_1.ConfigService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map