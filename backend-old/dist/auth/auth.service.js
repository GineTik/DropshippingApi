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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const HttpExceptionMessages_1 = require("../constants/HttpExceptionMessages");
const user_model_1 = require("../user/models/user.model");
const mail_service_1 = require("../mail/mail.service");
const token_service_1 = require("./token/token.service");
let AuthService = class AuthService {
    constructor(userModel, tokenService, mailService) {
        this.userModel = userModel;
        this.tokenService = tokenService;
        this.mailService = mailService;
    }
    async login(dto) {
        const user = await this.userModel.findOne({ email: dto.email });
        if (!user)
            throw new common_1.HttpException(HttpExceptionMessages_1.default.InvalidEmailOrPassword, 400);
        const isValidPassword = await (0, bcryptjs_1.compare)(dto.password, user.password);
        if (!isValidPassword)
            throw new common_1.HttpException(HttpExceptionMessages_1.default.InvalidEmailOrPassword, 400);
        if (!user.emailConfirmed)
            await this.mailService.sendActivationMail(user.email, user.activationCode);
        const tokens = await this.tokenService.generateAndSaveToken(user._id);
        return {
            ...tokens,
            user: {
                id: user._id,
                email: user.email,
                isActivated: user.emailConfirmed
            }
        };
    }
    async registration(dto) {
        const candidate = await this.userModel.findOne({ email: dto.email });
        if (candidate)
            throw new common_1.HttpException(HttpExceptionMessages_1.default.UserAlreadyExists, 400);
        const activationCode = this.generate6NumberCode();
        const user = await this.userModel.create({
            email: dto.email,
            password: await this.hashPassword(dto.password),
            activationCode: activationCode,
        });
        await this.mailService.sendActivationMail(user.email, activationCode);
        const tokens = await this.tokenService.generateAndSaveToken(user._id);
        return {
            ...tokens,
            user: {
                id: user._id,
                email: user.email,
                isActivated: user.emailConfirmed
            }
        };
    }
    async activate(_id, activationCode) {
        const user = await this.userModel.findOne({ _id, activationCode });
        if (!user)
            throw new common_1.HttpException(HttpExceptionMessages_1.default.ActivationCodeFailed, 400);
        user.emailConfirmed = true;
        await user.save();
    }
    async refresh(refreshToken) {
        if (!refreshToken)
            throw new common_1.HttpException(HttpExceptionMessages_1.default.RefreshTokenIsUndefined, 400);
        const result = await this.tokenService.validateRefreshToken(refreshToken);
        if (!result.successfully)
            throw new common_1.HttpException(result.error, 400);
        const newTokens = await this.tokenService.generateAndSaveToken(result.userId);
        const user = await this.userModel.findOne({ _id: result.userId });
        return {
            ...newTokens,
            user: {
                id: user._id,
                email: user.email,
                isActivated: user.emailConfirmed
            }
        };
    }
    async changePasswordRequest(_id) {
        const user = await this.userModel.findOne({ _id });
        if (!user)
            throw new common_1.HttpException(HttpExceptionMessages_1.default.InvalidUserId, 400);
        const activationCode = this.generate6NumberCode();
        user.activationCode = activationCode;
        await user.save();
        await this.mailService.sendChangePasswordMail(user.email, activationCode);
    }
    async confirmChangePassword(_id, { code, newPassword }) {
        const user = await this.userModel.findOne({ _id, activationCode: code });
        if (!user)
            throw new common_1.HttpException(HttpExceptionMessages_1.default.ActivationCodeFailed, 400);
        user.password = await this.hashPassword(newPassword);
        await user.save();
    }
    generate6NumberCode() {
        return Math.floor(100000 + Math.random() * 900000);
    }
    async hashPassword(password) {
        return await (0, bcryptjs_1.hash)(password, await (0, bcryptjs_1.genSalt)(10));
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [Object, token_service_1.TokenService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map