/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/backend/src/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/backend/src/app.controller.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/backend/src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./apps/backend/src/app.module.ts":
/*!****************************************!*\
  !*** ./apps/backend/src/app.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const microservices_1 = __webpack_require__(/*! @app/microservices */ "./libs/microservices/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const nestjs_typegoose_1 = __webpack_require__(/*! nestjs-typegoose */ "nestjs-typegoose");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/backend/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/backend/src/app.service.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/backend/src/auth/auth.module.ts");
const mongo_config_1 = __webpack_require__(/*! ./config/mongo.config */ "./apps/backend/src/config/mongo.config.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./apps/backend/src/user/user.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', './apps/backend/.env']
            }),
            nestjs_typegoose_1.TypegooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: mongo_config_1.getMongoConfig
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            microservices_1.RabbitMqModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);


/***/ }),

/***/ "./apps/backend/src/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/backend/src/app.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./apps/backend/src/auth/auth.controller.ts":
/*!**************************************************!*\
  !*** ./apps/backend/src/auth/auth.controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const express_1 = __webpack_require__(/*! express */ "express");
const auth_dto_1 = __webpack_require__(/*! ../../../../libs/dto/src/user/auth/auth.dto */ "./libs/dto/src/user/auth/auth.dto.ts");
const confirm_change_password_dto_1 = __webpack_require__(/*! ../../../../libs/dto/src/user/auth/confirm-change-password.dto */ "./libs/dto/src/user/auth/confirm-change-password.dto.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/backend/src/auth/auth.service.ts");
const access_token_guard_1 = __webpack_require__(/*! ./token/access-token.guard */ "./apps/backend/src/auth/token/access-token.guard.ts");
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
    __metadata("design:paramtypes", [typeof (_c = typeof auth_dto_1.AuthDto !== "undefined" && auth_dto_1.AuthDto) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)('registration'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof auth_dto_1.AuthDto !== "undefined" && auth_dto_1.AuthDto) === "function" ? _e : Object, typeof (_f = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registration", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Post)('activate/:code'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_h = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "activate", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _j : Object, typeof (_k = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Post)('change-password-request'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _l : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Post)('confirm-change-password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof confirm_change_password_dto_1.ConfirmChangePasswordDto !== "undefined" && confirm_change_password_dto_1.ConfirmChangePasswordDto) === "function" ? _m : Object, typeof (_o = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _o : Object]),
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
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], AuthController);


/***/ }),

/***/ "./apps/backend/src/auth/auth.module.ts":
/*!**********************************************!*\
  !*** ./apps/backend/src/auth/auth.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const models_1 = __webpack_require__(/*! @app/models */ "./libs/models/src/index.ts");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_module_1 = __webpack_require__(/*! @nestjs/config/dist/config.module */ "@nestjs/config/dist/config.module");
const config_service_1 = __webpack_require__(/*! @nestjs/config/dist/config.service */ "@nestjs/config/dist/config.service");
const typegoose_module_1 = __webpack_require__(/*! nestjs-typegoose/dist/typegoose.module */ "nestjs-typegoose/dist/typegoose.module");
const mail_config_1 = __webpack_require__(/*! ../config/mail.config */ "./apps/backend/src/config/mail.config.ts");
const mail_service_1 = __webpack_require__(/*! ../mail/mail.service */ "./apps/backend/src/mail/mail.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/backend/src/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/backend/src/auth/auth.service.ts");
const token_module_1 = __webpack_require__(/*! ./token/token.module */ "./apps/backend/src/auth/token/token.module.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                inject: [config_service_1.ConfigService],
                useFactory: mail_config_1.getMailConfig,
            }),
            typegoose_module_1.TypegooseModule.forFeature([
                {
                    typegooseClass: models_1.UserModel,
                    schemaOptions: {
                        collection: "User"
                    }
                },
            ]),
            token_module_1.TokenModule,
            config_module_1.ConfigModule
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, mail_service_1.MailService, config_service_1.ConfigService],
    })
], AuthModule);


/***/ }),

/***/ "./apps/backend/src/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./apps/backend/src/auth/auth.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const exceptions_1 = __webpack_require__(/*! @app/exceptions */ "./libs/exceptions/src/index.ts");
const models_1 = __webpack_require__(/*! @app/models */ "./libs/models/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const types_1 = __webpack_require__(/*! @typegoose/typegoose/lib/types */ "@typegoose/typegoose/lib/types");
const bcryptjs_1 = __webpack_require__(/*! bcryptjs */ "bcryptjs");
const nestjs_typegoose_1 = __webpack_require__(/*! nestjs-typegoose */ "nestjs-typegoose");
const mail_service_1 = __webpack_require__(/*! ../mail/mail.service */ "./apps/backend/src/mail/mail.service.ts");
const token_service_1 = __webpack_require__(/*! ./token/token.service */ "./apps/backend/src/auth/token/token.service.ts");
let AuthService = class AuthService {
    constructor(userModel, tokenService, mailService) {
        this.userModel = userModel;
        this.tokenService = tokenService;
        this.mailService = mailService;
    }
    async login(dto) {
        const user = await this.userModel.findOne({ email: dto.email });
        if (!user)
            throw new common_1.HttpException(exceptions_1.UserMessages.InvalidEmailOrPassword, 400);
        const isValidPassword = await (0, bcryptjs_1.compare)(dto.password, user.password);
        if (!isValidPassword)
            throw new common_1.HttpException(exceptions_1.UserMessages.InvalidEmailOrPassword, 400);
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
            throw new common_1.HttpException(exceptions_1.UserMessages.AlreadyExists, 400);
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
            throw new common_1.HttpException(exceptions_1.UserMessages.ActivationCodeFailed, 400);
        user.emailConfirmed = true;
        await user.save();
    }
    async refresh(refreshToken) {
        if (!refreshToken)
            throw new common_1.HttpException(exceptions_1.UserMessages.RefreshTokenIsUndefined, 400);
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
            throw new common_1.HttpException(exceptions_1.UserMessages.InvalidId, 400);
        const activationCode = this.generate6NumberCode();
        user.activationCode = activationCode;
        await user.save();
        await this.mailService.sendChangePasswordMail(user.email, activationCode);
    }
    async confirmChangePassword(_id, { code, newPassword }) {
        const user = await this.userModel.findOne({ _id, activationCode: code });
        if (!user)
            throw new common_1.HttpException(exceptions_1.UserMessages.ActivationCodeFailed, 400);
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
    __param(0, (0, nestjs_typegoose_1.InjectModel)(models_1.UserModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof types_1.ModelType !== "undefined" && types_1.ModelType) === "function" ? _a : Object, typeof (_b = typeof token_service_1.TokenService !== "undefined" && token_service_1.TokenService) === "function" ? _b : Object, typeof (_c = typeof mail_service_1.MailService !== "undefined" && mail_service_1.MailService) === "function" ? _c : Object])
], AuthService);


/***/ }),

/***/ "./apps/backend/src/auth/token/access-token.guard.ts":
/*!***********************************************************!*\
  !*** ./apps/backend/src/auth/token/access-token.guard.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_SECRET')
        });
        this.configService = configService;
    }
    async validate({ _id }) {
        return { _id };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),

/***/ "./apps/backend/src/auth/token/models/token.model.ts":
/*!***********************************************************!*\
  !*** ./apps/backend/src/auth/token/models/token.model.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenModel = void 0;
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
class TokenModel {
}
exports.TokenModel = TokenModel;
__decorate([
    (0, typegoose_1.prop)({ ref: 'User' }),
    __metadata("design:type", typeof (_a = typeof mongoose_1.Types !== "undefined" && mongoose_1.Types.ObjectId) === "function" ? _a : Object)
], TokenModel.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], TokenModel.prototype, "refreshToken", void 0);


/***/ }),

/***/ "./apps/backend/src/auth/token/token.module.ts":
/*!*****************************************************!*\
  !*** ./apps/backend/src/auth/token/token.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const nestjs_typegoose_1 = __webpack_require__(/*! nestjs-typegoose */ "nestjs-typegoose");
const jwt_config_1 = __webpack_require__(/*! ./../../config/jwt.config */ "./apps/backend/src/config/jwt.config.ts");
const access_token_guard_1 = __webpack_require__(/*! ./access-token.guard */ "./apps/backend/src/auth/token/access-token.guard.ts");
const token_model_1 = __webpack_require__(/*! ./models/token.model */ "./apps/backend/src/auth/token/models/token.model.ts");
const token_service_1 = __webpack_require__(/*! ./token.service */ "./apps/backend/src/auth/token/token.service.ts");
let TokenModule = class TokenModule {
};
exports.TokenModule = TokenModule;
exports.TokenModule = TokenModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: token_model_1.TokenModel,
                    schemaOptions: {
                        collection: "Token"
                    }
                }
            ]),
            config_1.ConfigModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: jwt_config_1.getJwtConfig
            }),
        ],
        providers: [token_service_1.TokenService, access_token_guard_1.JwtStrategy],
        exports: [token_service_1.TokenService, access_token_guard_1.JwtStrategy]
    })
], TokenModule);


/***/ }),

/***/ "./apps/backend/src/auth/token/token.service.ts":
/*!******************************************************!*\
  !*** ./apps/backend/src/auth/token/token.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const types_1 = __webpack_require__(/*! @typegoose/typegoose/lib/types */ "@typegoose/typegoose/lib/types");
const nestjs_typegoose_1 = __webpack_require__(/*! nestjs-typegoose */ "nestjs-typegoose");
const token_model_1 = __webpack_require__(/*! ./models/token.model */ "./apps/backend/src/auth/token/models/token.model.ts");
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
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof types_1.ModelType !== "undefined" && types_1.ModelType) === "function" ? _c : Object])
], TokenService);


/***/ }),

/***/ "./apps/backend/src/config/jwt.config.ts":
/*!***********************************************!*\
  !*** ./apps/backend/src/config/jwt.config.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getJwtConfig = void 0;
const getJwtConfig = async (configService) => ({
    secret: configService.get('JWT_SECRET'),
});
exports.getJwtConfig = getJwtConfig;


/***/ }),

/***/ "./apps/backend/src/config/mail.config.ts":
/*!************************************************!*\
  !*** ./apps/backend/src/config/mail.config.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMailConfig = void 0;
const ejs_adapter_1 = __webpack_require__(/*! @nestjs-modules/mailer/dist/adapters/ejs.adapter */ "@nestjs-modules/mailer/dist/adapters/ejs.adapter");
const getMailConfig = async (configService) => {
    const host = configService.get('MAIL_HOST');
    const port = configService.get('MAIL_PORT');
    const fromName = configService.get('MAIL_FROM');
    const fromAddress = configService.get('MAIL_USERNAME');
    const password = configService.get('MAIL_PASSWORD');
    return {
        transport: {
            host,
            port,
            secure: false,
            auth: {
                user: fromAddress,
                pass: password,
            },
            tls: {
                rejectUnauthorized: false
            },
        },
        defaults: {
            from: `"${fromName}" <${fromAddress}>`,
        },
        template: {
            adapter: new ejs_adapter_1.EjsAdapter(),
            options: {
                strict: false,
            },
        },
    };
};
exports.getMailConfig = getMailConfig;


/***/ }),

/***/ "./apps/backend/src/config/mongo.config.ts":
/*!*************************************************!*\
  !*** ./apps/backend/src/config/mongo.config.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => ({
    uri: configService.get('MONGO_URI'),
});
exports.getMongoConfig = getMongoConfig;


/***/ }),

/***/ "./apps/backend/src/mail/mail.service.ts":
/*!***********************************************!*\
  !*** ./apps/backend/src/mail/mail.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailService = void 0;
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const path_1 = __webpack_require__(/*! path */ "path");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendActivationMail(to, code) {
        await this.mailerService.sendMail({
            to: to,
            subject: 'Підтвердження реєстрації',
            template: (0, path_1.join)(__dirname, './templates', 'confirm-registration'),
            context: {
                code,
            },
        })
            .catch((e) => {
            throw new common_1.HttpException(`Помилка роботи почти: ${JSON.stringify(e)}`, 500);
        });
    }
    async sendChangePasswordMail(to, code) {
        await this.mailerService.sendMail({
            to: to,
            subject: 'Підтвердити зміну паролю',
            template: (0, path_1.join)(__dirname, './templates', 'confirm-change-password'),
            context: {
                code,
            },
        })
            .catch((e) => {
            throw new common_1.HttpException(`Помилка роботи почти: ${JSON.stringify(e)}`, 500);
        });
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], MailService);


/***/ }),

/***/ "./apps/backend/src/user/allowed-hosts/allowed-hosts.controller.ts":
/*!*************************************************************************!*\
  !*** ./apps/backend/src/user/allowed-hosts/allowed-hosts.controller.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllowedHostsController = void 0;
const dto_1 = __webpack_require__(/*! @app/dto */ "./libs/dto/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const access_token_guard_1 = __webpack_require__(/*! ../../auth/token/access-token.guard */ "./apps/backend/src/auth/token/access-token.guard.ts");
const allowed_hosts_service_1 = __webpack_require__(/*! ./allowed-hosts.service */ "./apps/backend/src/user/allowed-hosts/allowed-hosts.service.ts");
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
    __metadata("design:paramtypes", [typeof (_b = typeof Express !== "undefined" && Express.Request) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AllowedHostsController.prototype, "getApiKeys", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.AddAllowedHostDto !== "undefined" && dto_1.AddAllowedHostDto) === "function" ? _c : Object, typeof (_d = typeof Express !== "undefined" && Express.Request) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AllowedHostsController.prototype, "addAllowedHost", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dto_1.UpdateAllowedHostDto !== "undefined" && dto_1.UpdateAllowedHostDto) === "function" ? _e : Object, typeof (_f = typeof Express !== "undefined" && Express.Request) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], AllowedHostsController.prototype, "updateAllowedHost", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)('host')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof Express !== "undefined" && Express.Request) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], AllowedHostsController.prototype, "deleteAllowedHost", null);
exports.AllowedHostsController = AllowedHostsController = __decorate([
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('user/allowed-hosts'),
    __metadata("design:paramtypes", [typeof (_a = typeof allowed_hosts_service_1.AllowedHostsService !== "undefined" && allowed_hosts_service_1.AllowedHostsService) === "function" ? _a : Object])
], AllowedHostsController);


/***/ }),

/***/ "./apps/backend/src/user/allowed-hosts/allowed-hosts.module.ts":
/*!*********************************************************************!*\
  !*** ./apps/backend/src/user/allowed-hosts/allowed-hosts.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllowedHostsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nestjs_typegoose_1 = __webpack_require__(/*! nestjs-typegoose */ "nestjs-typegoose");
const user_model_1 = __webpack_require__(/*! ../../../../../libs/models/src/user/user.model */ "./libs/models/src/user/user.model.ts");
const allowed_hosts_controller_1 = __webpack_require__(/*! ./allowed-hosts.controller */ "./apps/backend/src/user/allowed-hosts/allowed-hosts.controller.ts");
const allowed_hosts_service_1 = __webpack_require__(/*! ./allowed-hosts.service */ "./apps/backend/src/user/allowed-hosts/allowed-hosts.service.ts");
let AllowedHostsModule = class AllowedHostsModule {
};
exports.AllowedHostsModule = AllowedHostsModule;
exports.AllowedHostsModule = AllowedHostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([{
                    typegooseClass: user_model_1.UserModel,
                    schemaOptions: {
                        collection: "User"
                    }
                }]),
        ],
        controllers: [allowed_hosts_controller_1.AllowedHostsController],
        providers: [allowed_hosts_service_1.AllowedHostsService],
    })
], AllowedHostsModule);


/***/ }),

/***/ "./apps/backend/src/user/allowed-hosts/allowed-hosts.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/backend/src/user/allowed-hosts/allowed-hosts.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllowedHostsService = void 0;
const exceptions_1 = __webpack_require__(/*! @app/exceptions */ "./libs/exceptions/src/index.ts");
const models_1 = __webpack_require__(/*! @app/models */ "./libs/models/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const types_1 = __webpack_require__(/*! @typegoose/typegoose/lib/types */ "@typegoose/typegoose/lib/types");
const nestjs_typegoose_1 = __webpack_require__(/*! nestjs-typegoose */ "nestjs-typegoose");
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
            throw new common_1.BadRequestException(exceptions_1.HostMessages.AlreadyAllowed);
        if (user.allowedHosts.length >= user.limitOfApiKeysAndHosts)
            throw new common_1.BadRequestException(exceptions_1.HostAndKeysMessages.Limit);
        const allowedHost = models_1.AllowedHostModel.fromAddDto(dto);
        await user.updateOne({ $push: { "allowedHosts": allowedHost } });
    }
    async update(_id, updateDto) {
        const newAllowedHost = models_1.AllowedHostModel.fromUpdateDto(updateDto);
        const { modifiedCount } = await this.userModel.updateOne({ _id, "allowedHosts.host": updateDto.oldHost }, { "$set": { "allowedHosts.$": newAllowedHost } });
        if (modifiedCount === 0)
            throw new common_1.HttpException(exceptions_1.HostMessages.NotExists, 400);
    }
    async delete(_id, host) {
        const { modifiedCount } = await this.userModel.updateOne({ _id }, { "$pull": { "allowedHosts": { host } } });
        if (modifiedCount === 0)
            throw new common_1.BadRequestException(exceptions_1.HostMessages.DeletionFailed);
    }
    async getUser(_id) {
        const user = await this.userModel.findOne({ _id });
        if (!user)
            throw new common_1.UnauthorizedException(exceptions_1.UserMessages.InvalidId);
        return user;
    }
};
exports.AllowedHostsService = AllowedHostsService;
exports.AllowedHostsService = AllowedHostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(models_1.UserModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof types_1.ModelType !== "undefined" && types_1.ModelType) === "function" ? _a : Object])
], AllowedHostsService);


/***/ }),

/***/ "./apps/backend/src/user/api-keys/api-keys.controller.ts":
/*!***************************************************************!*\
  !*** ./apps/backend/src/user/api-keys/api-keys.controller.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiKeysController = void 0;
const dto_1 = __webpack_require__(/*! @app/dto */ "./libs/dto/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const access_token_guard_1 = __webpack_require__(/*! ../../auth/token/access-token.guard */ "./apps/backend/src/auth/token/access-token.guard.ts");
const api_keys_service_1 = __webpack_require__(/*! ./api-keys.service */ "./apps/backend/src/user/api-keys/api-keys.service.ts");
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
    __metadata("design:paramtypes", [typeof (_b = typeof Express !== "undefined" && Express.Request) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ApiKeysController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.ApiKeyDto !== "undefined" && dto_1.ApiKeyDto) === "function" ? _c : Object, typeof (_d = typeof Express !== "undefined" && Express.Request) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ApiKeysController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dto_1.UpdateApiKeyDto !== "undefined" && dto_1.UpdateApiKeyDto) === "function" ? _e : Object, typeof (_f = typeof Express !== "undefined" && Express.Request) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], ApiKeysController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)('apiKey')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof Express !== "undefined" && Express.Request) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], ApiKeysController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)('apiKey')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_h = typeof Express !== "undefined" && Express.Request) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], ApiKeysController.prototype, "delete", null);
exports.ApiKeysController = ApiKeysController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('user/api-keys'),
    __metadata("design:paramtypes", [typeof (_a = typeof api_keys_service_1.ApiKeysService !== "undefined" && api_keys_service_1.ApiKeysService) === "function" ? _a : Object])
], ApiKeysController);


/***/ }),

/***/ "./apps/backend/src/user/api-keys/api-keys.module.ts":
/*!***********************************************************!*\
  !*** ./apps/backend/src/user/api-keys/api-keys.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiKeysModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nestjs_typegoose_1 = __webpack_require__(/*! nestjs-typegoose */ "nestjs-typegoose");
const user_model_1 = __webpack_require__(/*! ../../../../../libs/models/src/user/user.model */ "./libs/models/src/user/user.model.ts");
const api_keys_controller_1 = __webpack_require__(/*! ./api-keys.controller */ "./apps/backend/src/user/api-keys/api-keys.controller.ts");
const api_keys_service_1 = __webpack_require__(/*! ./api-keys.service */ "./apps/backend/src/user/api-keys/api-keys.service.ts");
let ApiKeysModule = class ApiKeysModule {
};
exports.ApiKeysModule = ApiKeysModule;
exports.ApiKeysModule = ApiKeysModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([{
                    typegooseClass: user_model_1.UserModel,
                    schemaOptions: {
                        collection: "User"
                    }
                }]),
        ],
        controllers: [api_keys_controller_1.ApiKeysController],
        providers: [api_keys_service_1.ApiKeysService],
    })
], ApiKeysModule);


/***/ }),

/***/ "./apps/backend/src/user/api-keys/api-keys.service.ts":
/*!************************************************************!*\
  !*** ./apps/backend/src/user/api-keys/api-keys.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiKeysService = void 0;
const exceptions_1 = __webpack_require__(/*! @app/exceptions */ "./libs/exceptions/src/index.ts");
const models_1 = __webpack_require__(/*! @app/models */ "./libs/models/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const types_1 = __webpack_require__(/*! @typegoose/typegoose/lib/types */ "@typegoose/typegoose/lib/types");
const nestjs_typegoose_1 = __webpack_require__(/*! nestjs-typegoose */ "nestjs-typegoose");
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
            throw new common_1.BadRequestException(exceptions_1.HostAndKeysMessages.Limit);
        const apiKey = models_1.ApiKeyModel.fromDto(dto);
        await this.userModel.updateOne({ _id }, { $push: { "apiKeys": apiKey } });
        return apiKey;
    }
    async update(_id, dto) {
        const newModel = models_1.ApiKeyModel.fromUpdateDto(dto);
        const { modifiedCount } = await this.userModel.updateOne({ _id, "apiKeys.key": dto.key }, { "$set": { "apiKeys.$": newModel } });
        if (modifiedCount === 0)
            throw new common_1.BadRequestException(exceptions_1.ApiKeyMessages.NotExists);
    }
    async refresh(_id, apiKey) {
        const newApiKey = crypto.randomUUID();
        const { modifiedCount } = await this.userModel.updateOne({ _id, "apiKeys.key": apiKey }, { "$set": { "apiKeys.$.key": newApiKey } });
        if (modifiedCount === 0)
            throw new common_1.BadRequestException(exceptions_1.ApiKeyMessages.Invalid);
        return newApiKey;
    }
    async delete(_id, apiKey) {
        const { modifiedCount } = await this.userModel.updateOne({ _id }, { "$pull": { "apiKeys": { key: apiKey } } });
        if (modifiedCount === 0)
            throw new common_1.BadRequestException(exceptions_1.ApiKeyMessages.DeletionFailed);
    }
    async getUser(_id) {
        const user = await this.userModel.findOne({ _id });
        if (!user)
            throw new common_1.UnauthorizedException(exceptions_1.UserMessages.InvalidId);
        return user;
    }
};
exports.ApiKeysService = ApiKeysService;
exports.ApiKeysService = ApiKeysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(models_1.UserModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof types_1.ModelType !== "undefined" && types_1.ModelType) === "function" ? _a : Object])
], ApiKeysService);


/***/ }),

/***/ "./apps/backend/src/user/user-profile.dto.ts":
/*!***************************************************!*\
  !*** ./apps/backend/src/user/user-profile.dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProfileDto = void 0;
class UserProfileDto {
    constructor(userModel) {
        this.id = userModel._id;
        this.email = userModel.email;
        this.isActivated = userModel.emailConfirmed;
    }
}
exports.UserProfileDto = UserProfileDto;


/***/ }),

/***/ "./apps/backend/src/user/user.controller.ts":
/*!**************************************************!*\
  !*** ./apps/backend/src/user/user.controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const access_token_guard_1 = __webpack_require__(/*! ./../auth/token/access-token.guard */ "./apps/backend/src/auth/token/access-token.guard.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/backend/src/user/user.service.ts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getProfile(request) {
        return await this.userService.getProfile(request.user['_id']);
    }
    async getMaxCountOfApiKeysAndHosts(request) {
        return await this.userService.getMaxCountOfApiKeysAndHosts(request.user['_id']);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof Express !== "undefined" && Express.Request) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getProfile", null);
__decorate([
    (0, common_1.UseGuards)(access_token_guard_1.JwtAuthGuard),
    (0, common_1.Get)('max-count'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof Express !== "undefined" && Express.Request) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getMaxCountOfApiKeysAndHosts", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./apps/backend/src/user/user.module.ts":
/*!**********************************************!*\
  !*** ./apps/backend/src/user/user.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const models_1 = __webpack_require__(/*! @app/models */ "./libs/models/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nestjs_typegoose_1 = __webpack_require__(/*! nestjs-typegoose */ "nestjs-typegoose");
const allowed_hosts_module_1 = __webpack_require__(/*! ./allowed-hosts/allowed-hosts.module */ "./apps/backend/src/user/allowed-hosts/allowed-hosts.module.ts");
const api_keys_module_1 = __webpack_require__(/*! ./api-keys/api-keys.module */ "./apps/backend/src/user/api-keys/api-keys.module.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./apps/backend/src/user/user.controller.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/backend/src/user/user.service.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([{
                    typegooseClass: models_1.UserModel,
                    schemaOptions: {
                        collection: "User"
                    }
                }]),
            api_keys_module_1.ApiKeysModule,
            allowed_hosts_module_1.AllowedHostsModule,
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);


/***/ }),

/***/ "./apps/backend/src/user/user.service.ts":
/*!***********************************************!*\
  !*** ./apps/backend/src/user/user.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const exceptions_1 = __webpack_require__(/*! @app/exceptions */ "./libs/exceptions/src/index.ts");
const models_1 = __webpack_require__(/*! @app/models */ "./libs/models/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const types_1 = __webpack_require__(/*! @typegoose/typegoose/lib/types */ "@typegoose/typegoose/lib/types");
const nestjs_typegoose_1 = __webpack_require__(/*! nestjs-typegoose */ "nestjs-typegoose");
const user_profile_dto_1 = __webpack_require__(/*! ./user-profile.dto */ "./apps/backend/src/user/user-profile.dto.ts");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getProfile(_id) {
        const user = await this.userModel.findOne({ _id });
        return new user_profile_dto_1.UserProfileDto(user);
    }
    async getMaxCountOfApiKeysAndHosts(_id) {
        const user = await this.getUser(_id);
        return user.limitOfApiKeysAndHosts;
    }
    async getUser(_id) {
        const user = await this.userModel.findOne({ _id });
        if (!user)
            throw new common_1.UnauthorizedException(exceptions_1.UserMessages.InvalidId);
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(models_1.UserModel)),
    __metadata("design:paramtypes", [typeof (_a = typeof types_1.ModelType !== "undefined" && types_1.ModelType) === "function" ? _a : Object])
], UserService);


/***/ }),

/***/ "./libs/dto/src/index.ts":
/*!*******************************!*\
  !*** ./libs/dto/src/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user */ "./libs/dto/src/user/index.ts"), exports);


/***/ }),

/***/ "./libs/dto/src/user/allowed-hosts/add-allowed-host.dto.ts":
/*!*****************************************************************!*\
  !*** ./libs/dto/src/user/allowed-hosts/add-allowed-host.dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddAllowedHostDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AddAllowedHostDto {
}
exports.AddAllowedHostDto = AddAllowedHostDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Ім\'я обов\'язкове поле' }),
    (0, class_validator_1.IsString)({ message: 'Ім\'я має бути строко' }),
    __metadata("design:type", String)
], AddAllowedHostDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Опис має бути строкою' }),
    __metadata("design:type", String)
], AddAllowedHostDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Хост обов\'язкове поле' }),
    (0, class_validator_1.IsString)({ message: 'Хост має бути строкою' }),
    __metadata("design:type", String)
], AddAllowedHostDto.prototype, "host", void 0);


/***/ }),

/***/ "./libs/dto/src/user/allowed-hosts/index.ts":
/*!**************************************************!*\
  !*** ./libs/dto/src/user/allowed-hosts/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./add-allowed-host.dto */ "./libs/dto/src/user/allowed-hosts/add-allowed-host.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-allowed-host.dto */ "./libs/dto/src/user/allowed-hosts/update-allowed-host.dto.ts"), exports);


/***/ }),

/***/ "./libs/dto/src/user/allowed-hosts/update-allowed-host.dto.ts":
/*!********************************************************************!*\
  !*** ./libs/dto/src/user/allowed-hosts/update-allowed-host.dto.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAllowedHostDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateAllowedHostDto {
}
exports.UpdateAllowedHostDto = UpdateAllowedHostDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Хост обов\'язкове поле' }),
    (0, class_validator_1.IsString)({ message: 'Хост має бути строкою' }),
    __metadata("design:type", String)
], UpdateAllowedHostDto.prototype, "newHost", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Ім\'я обов\'язкове поле' }),
    (0, class_validator_1.IsString)({ message: 'Ім\'я має бути строко' }),
    __metadata("design:type", String)
], UpdateAllowedHostDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Опис має бути строкою' }),
    __metadata("design:type", String)
], UpdateAllowedHostDto.prototype, "description", void 0);


/***/ }),

/***/ "./libs/dto/src/user/api-keys/api-key.dto.ts":
/*!***************************************************!*\
  !*** ./libs/dto/src/user/api-keys/api-key.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiKeyDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ApiKeyDto {
}
exports.ApiKeyDto = ApiKeyDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Ім\'я обов\'язкове поле' }),
    (0, class_validator_1.IsString)({ message: 'Ім\'я має бути строко' }),
    __metadata("design:type", String)
], ApiKeyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Опис має бути строкою' }),
    __metadata("design:type", String)
], ApiKeyDto.prototype, "description", void 0);


/***/ }),

/***/ "./libs/dto/src/user/api-keys/index.ts":
/*!*********************************************!*\
  !*** ./libs/dto/src/user/api-keys/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./api-key.dto */ "./libs/dto/src/user/api-keys/api-key.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-api-key.dto */ "./libs/dto/src/user/api-keys/update-api-key.dto.ts"), exports);


/***/ }),

/***/ "./libs/dto/src/user/api-keys/update-api-key.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/dto/src/user/api-keys/update-api-key.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateApiKeyDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateApiKeyDto {
}
exports.UpdateApiKeyDto = UpdateApiKeyDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Ім\'я обов\'язкове поле' }),
    (0, class_validator_1.IsString)({ message: 'Ім\'я має бути строко' }),
    __metadata("design:type", String)
], UpdateApiKeyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Опис має бути строкою' }),
    __metadata("design:type", String)
], UpdateApiKeyDto.prototype, "description", void 0);


/***/ }),

/***/ "./libs/dto/src/user/auth/auth.dto.ts":
/*!********************************************!*\
  !*** ./libs/dto/src/user/auth/auth.dto.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AuthDto {
}
exports.AuthDto = AuthDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AuthDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Пароль має бути довше 6 символів'
    }),
    __metadata("design:type", String)
], AuthDto.prototype, "password", void 0);


/***/ }),

/***/ "./libs/dto/src/user/auth/confirm-change-password.dto.ts":
/*!***************************************************************!*\
  !*** ./libs/dto/src/user/auth/confirm-change-password.dto.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfirmChangePasswordDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ConfirmChangePasswordDto {
}
exports.ConfirmChangePasswordDto = ConfirmChangePasswordDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(100000, {
        message: 'Код має 6 цифр'
    }),
    (0, class_validator_1.Max)(999999, {
        message: 'Код має 6 цифр'
    }),
    __metadata("design:type", Number)
], ConfirmChangePasswordDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Пароль має бути довше 6 символів'
    }),
    __metadata("design:type", String)
], ConfirmChangePasswordDto.prototype, "newPassword", void 0);


/***/ }),

/***/ "./libs/dto/src/user/auth/index.ts":
/*!*****************************************!*\
  !*** ./libs/dto/src/user/auth/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.dto */ "./libs/dto/src/user/auth/auth.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./confirm-change-password.dto */ "./libs/dto/src/user/auth/confirm-change-password.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./success-auth.dto */ "./libs/dto/src/user/auth/success-auth.dto.ts"), exports);


/***/ }),

/***/ "./libs/dto/src/user/auth/success-auth.dto.ts":
/*!****************************************************!*\
  !*** ./libs/dto/src/user/auth/success-auth.dto.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuccessAuthDto = void 0;
class SuccessAuthDto {
}
exports.SuccessAuthDto = SuccessAuthDto;


/***/ }),

/***/ "./libs/dto/src/user/index.ts":
/*!************************************!*\
  !*** ./libs/dto/src/user/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./allowed-hosts */ "./libs/dto/src/user/allowed-hosts/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./api-keys */ "./libs/dto/src/user/api-keys/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./auth */ "./libs/dto/src/user/auth/index.ts"), exports);


/***/ }),

/***/ "./libs/exceptions/src/http-messages.constants.ts":
/*!********************************************************!*\
  !*** ./libs/exceptions/src/http-messages.constants.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiKeyMessages = exports.HostMessages = exports.HostAndKeysMessages = exports.UserMessages = void 0;
exports.UserMessages = {
    ActivationCodeFailed: 'Код підтвердження невірний або недійсний',
    InvalidId: 'Користувач не найдений',
    InvalidPassword: 'Некоректний пароль',
    RefreshTokenIsUndefined: 'Refresh token is undefined',
    AlreadyExists: 'User already exists',
    InvalidEmailOrPassword: 'Пошта або пароль невірний',
};
exports.HostAndKeysMessages = {
    Limit: 'Досягнута максимальна кількість АПІ ключів та хостів',
};
exports.HostMessages = {
    NotExists: 'Даного хоста не існує',
    AlreadyAllowed: 'Даний хост вже дозволений',
    DeletionFailed: 'При видалені апі ключа сталась помилка',
};
exports.ApiKeyMessages = {
    Invalid: 'Ключ невірного формату',
    NotExists: 'Такого АПІ ключа не існує',
    DeletionFailed: 'При видалені апі ключа сталась помилка',
};


/***/ }),

/***/ "./libs/exceptions/src/index.ts":
/*!**************************************!*\
  !*** ./libs/exceptions/src/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./http-messages.constants */ "./libs/exceptions/src/http-messages.constants.ts"), exports);


/***/ }),

/***/ "./libs/microservices/src/constants/index.ts":
/*!***************************************************!*\
  !*** ./libs/microservices/src/constants/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./microservices.constants */ "./libs/microservices/src/constants/microservices.constants.ts"), exports);
__exportStar(__webpack_require__(/*! ./queue.constants */ "./libs/microservices/src/constants/queue.constants.ts"), exports);


/***/ }),

/***/ "./libs/microservices/src/constants/microservices.constants.ts":
/*!*********************************************************************!*\
  !*** ./libs/microservices/src/constants/microservices.constants.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MicroservicesEndpoints = void 0;
exports.MicroservicesEndpoints = {
    updateOffers: 'update-offers'
};


/***/ }),

/***/ "./libs/microservices/src/constants/queue.constants.ts":
/*!*************************************************************!*\
  !*** ./libs/microservices/src/constants/queue.constants.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OFFERS_UNLOADER = exports.ACCOUNT = exports.OFFERS = void 0;
exports.OFFERS = 'offers';
exports.ACCOUNT = 'account';
exports.OFFERS_UNLOADER = 'offers-unloader';


/***/ }),

/***/ "./libs/microservices/src/index.ts":
/*!*****************************************!*\
  !*** ./libs/microservices/src/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./constants */ "./libs/microservices/src/constants/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./microservice.start */ "./libs/microservices/src/microservice.start.ts"), exports);
__exportStar(__webpack_require__(/*! ./rabbitmq.module */ "./libs/microservices/src/rabbitmq.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./rabbitmq.service */ "./libs/microservices/src/rabbitmq.service.ts"), exports);


/***/ }),

/***/ "./libs/microservices/src/microservice.start.ts":
/*!******************************************************!*\
  !*** ./libs/microservices/src/microservice.start.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultStartMicroservice = void 0;
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const defaultStartMicroservice = async (app) => {
    const configService = app.get(config_1.ConfigService);
    await app.startAllMicroservices();
    console.log('microservices started');
    await app.listen(configService.get('PORT'), '0.0.0.0');
};
exports.defaultStartMicroservice = defaultStartMicroservice;


/***/ }),

/***/ "./libs/microservices/src/rabbitmq.module.ts":
/*!***************************************************!*\
  !*** ./libs/microservices/src/rabbitmq.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RabbitMqModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RabbitMqModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rabbitmq_service_1 = __webpack_require__(/*! ./rabbitmq.service */ "./libs/microservices/src/rabbitmq.service.ts");
let RabbitMqModule = RabbitMqModule_1 = class RabbitMqModule {
    static register({ name }) {
        return {
            module: RabbitMqModule_1,
            imports: [
                microservices_1.ClientsModule.registerAsync([
                    {
                        name,
                        useFactory: (configService) => {
                            const USER = configService.getOrThrow('RABBITMQ_DEFAULT_USER');
                            const PASSWORD = configService.getOrThrow('RABBITMQ_DEFAULT_PASS');
                            const HOST = configService.getOrThrow('RABBITMQ_HOST');
                            return {
                                transport: microservices_1.Transport.RMQ,
                                options: {
                                    urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
                                    queue: name,
                                    noAck: false,
                                    persistent: true,
                                    queueOptions: {
                                        durable: true
                                    }
                                }
                            };
                        },
                        inject: [config_1.ConfigService]
                    }
                ])
            ],
            exports: [microservices_1.ClientsModule]
        };
    }
};
exports.RabbitMqModule = RabbitMqModule;
exports.RabbitMqModule = RabbitMqModule = RabbitMqModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [rabbitmq_service_1.RabbitMqService],
        exports: [rabbitmq_service_1.RabbitMqService]
    })
], RabbitMqModule);


/***/ }),

/***/ "./libs/microservices/src/rabbitmq.service.ts":
/*!****************************************************!*\
  !*** ./libs/microservices/src/rabbitmq.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RabbitMqService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let RabbitMqService = class RabbitMqService {
    constructor(configService) {
        this.configService = configService;
    }
    getOptions(queue) {
        const USER = this.configService.getOrThrow('RABBITMQ_DEFAULT_USER');
        const PASSWORD = this.configService.getOrThrow('RABBITMQ_DEFAULT_PASS');
        const HOST = this.configService.getOrThrow('RABBITMQ_HOST');
        return {
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
                queue: queue,
                queueOptions: {
                    durable: true
                }
            }
        };
    }
};
exports.RabbitMqService = RabbitMqService;
exports.RabbitMqService = RabbitMqService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], RabbitMqService);


/***/ }),

/***/ "./libs/models/src/index.ts":
/*!**********************************!*\
  !*** ./libs/models/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user */ "./libs/models/src/user/index.ts"), exports);


/***/ }),

/***/ "./libs/models/src/user/allowed-host.model.ts":
/*!****************************************************!*\
  !*** ./libs/models/src/user/allowed-host.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllowedHostModel = void 0;
class AllowedHostModel {
}
exports.AllowedHostModel = AllowedHostModel;
AllowedHostModel.fromUpdateDto = (dto) => ({
    name: dto.name,
    description: dto.description,
    host: dto.newHost
});
AllowedHostModel.fromAddDto = (dto) => ({
    ...dto
});


/***/ }),

/***/ "./libs/models/src/user/api-key.model.ts":
/*!***********************************************!*\
  !*** ./libs/models/src/user/api-key.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiKeyModel = void 0;
class ApiKeyModel {
}
exports.ApiKeyModel = ApiKeyModel;
ApiKeyModel.fromDto = (dto) => ({
    ...dto,
    key: crypto.randomUUID()
});
ApiKeyModel.fromUpdateDto = (dto) => ({
    ...dto
});


/***/ }),

/***/ "./libs/models/src/user/index.ts":
/*!***************************************!*\
  !*** ./libs/models/src/user/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./allowed-host.model */ "./libs/models/src/user/allowed-host.model.ts"), exports);
__exportStar(__webpack_require__(/*! ./api-key.model */ "./libs/models/src/user/api-key.model.ts"), exports);
__exportStar(__webpack_require__(/*! ./user.model */ "./libs/models/src/user/user.model.ts"), exports);


/***/ }),

/***/ "./libs/models/src/user/user.model.ts":
/*!********************************************!*\
  !*** ./libs/models/src/user/user.model.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModel = void 0;
const typegoose_1 = __webpack_require__(/*! @typegoose/typegoose */ "@typegoose/typegoose");
const defaultClasses_1 = __webpack_require__(/*! @typegoose/typegoose/lib/defaultClasses */ "@typegoose/typegoose/lib/defaultClasses");
class UserModel extends defaultClasses_1.TimeStamps {
}
exports.UserModel = UserModel;
__decorate([
    (0, typegoose_1.prop)({ unique: true, required: true }),
    __metadata("design:type", String)
], UserModel.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: false }),
    __metadata("design:type", Boolean)
], UserModel.prototype, "emailConfirmed", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], UserModel.prototype, "activationCode", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: [] }),
    __metadata("design:type", Array)
], UserModel.prototype, "apiKeys", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: [] }),
    __metadata("design:type", Array)
], UserModel.prototype, "allowedHosts", void 0);
__decorate([
    (0, typegoose_1.prop)({ default: 10 }),
    __metadata("design:type", Number)
], UserModel.prototype, "limitOfApiKeysAndHosts", void 0);


/***/ }),

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs-modules/mailer/dist/adapters/ejs.adapter":
/*!*******************************************************************!*\
  !*** external "@nestjs-modules/mailer/dist/adapters/ejs.adapter" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/config/dist/config.module":
/*!****************************************************!*\
  !*** external "@nestjs/config/dist/config.module" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@nestjs/config/dist/config.module");

/***/ }),

/***/ "@nestjs/config/dist/config.service":
/*!*****************************************************!*\
  !*** external "@nestjs/config/dist/config.service" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@nestjs/config/dist/config.service");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@typegoose/typegoose":
/*!***************************************!*\
  !*** external "@typegoose/typegoose" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@typegoose/typegoose");

/***/ }),

/***/ "@typegoose/typegoose/lib/defaultClasses":
/*!**********************************************************!*\
  !*** external "@typegoose/typegoose/lib/defaultClasses" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@typegoose/typegoose/lib/defaultClasses");

/***/ }),

/***/ "@typegoose/typegoose/lib/types":
/*!*************************************************!*\
  !*** external "@typegoose/typegoose/lib/types" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@typegoose/typegoose/lib/types");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nestjs-typegoose":
/*!***********************************!*\
  !*** external "nestjs-typegoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("nestjs-typegoose");

/***/ }),

/***/ "nestjs-typegoose/dist/typegoose.module":
/*!*********************************************************!*\
  !*** external "nestjs-typegoose/dist/typegoose.module" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("nestjs-typegoose/dist/typegoose.module");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./apps/backend/src/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const microservices_1 = __webpack_require__(/*! @app/microservices */ "./libs/microservices/src/index.ts");
const rabbitmq_service_1 = __webpack_require__(/*! @app/microservices/rabbitmq.service */ "./libs/microservices/src/rabbitmq.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/backend/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const rmqService = app.get(rabbitmq_service_1.RabbitMqService);
    app.useLogger(common_1.Logger);
    app.setGlobalPrefix('api');
    app.use(cookieParser());
    app.enableCors({
        credentials: true,
        origin: configService.getOrThrow('FRONTEND_URL')
    });
    app.connectMicroservice(rmqService.getOptions(microservices_1.ACCOUNT));
    await (0, microservices_1.defaultStartMicroservice)(app);
}
bootstrap();

})();

/******/ })()
;