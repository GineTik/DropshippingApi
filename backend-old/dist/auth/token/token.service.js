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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const token_model_1 = require("./models/token.model");
let TokenService = class TokenService {
    constructor(jwtService, configService, tokenModel) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.tokenModel = tokenModel;
    }
    async generateTokens(_id) {
        const payload = { _id };
        const accessToken = await this.jwtService.signAsync(payload, {
            secret: this.configService.get('JWT_SECRET'),
            expiresIn: '15m'
        });
        const refreshToken = await this.jwtService.signAsync(payload, {
            secret: this.configService.get('JWT_REFRESH'),
            expiresIn: '30d'
        });
        return {
            accessToken,
            refreshToken
        };
    }
    async saveToken(token) {
        const foundToken = await this.tokenModel.findOne({ user: token.user });
        if (foundToken) {
            foundToken.refreshToken = token.refreshToken;
            return foundToken.save();
        }
        return await this.tokenModel.create(token);
    }
    async generateAndSaveToken(_id) {
        const tokens = await this.generateTokens(_id);
        await this.saveToken({
            user: _id,
            refreshToken: tokens.refreshToken
        });
        return tokens;
    }
    async removeRefreshToken(refreshToken) {
        await this.tokenModel.deleteOne({ refreshToken });
    }
    async validateRefreshToken(refreshToken) {
        try {
            const payload = await this.jwtService.verifyAsync(refreshToken, {
                secret: this.configService.get('JWT_REFRESH')
            });
            return { successfully: true, userId: payload._id, error: undefined };
        }
        catch (e) {
            return { successfully: false, userId: undefined, error: e };
        }
    }
    async validateAccessToken(accessToken) {
        try {
            const payload = await this.jwtService.verifyAsync(accessToken, {
                secret: this.configService.get('JWT_SECRET')
            });
            return { successfully: true, userId: payload._id };
        }
        catch (e) {
            return { successfully: false, userId: undefined };
        }
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, nestjs_typegoose_1.InjectModel)(token_model_1.TokenModel)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService, Object])
], TokenService);
//# sourceMappingURL=token.service.js.map