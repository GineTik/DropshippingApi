"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const jwt_config_1 = require("../../config/jwt.config");
const access_token_guard_1 = require("./access-token.guard");
const token_model_1 = require("./models/token.model");
const token_service_1 = require("./token.service");
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
//# sourceMappingURL=token.module.js.map