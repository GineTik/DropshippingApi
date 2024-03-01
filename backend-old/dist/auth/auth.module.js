"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const config_module_1 = require("@nestjs/config/dist/config.module");
const config_service_1 = require("@nestjs/config/dist/config.service");
const typegoose_module_1 = require("nestjs-typegoose/dist/typegoose.module");
const mail_config_1 = require("../config/mail.config");
const user_model_1 = require("../user/models/user.model");
const mail_service_1 = require("../mail/mail.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const token_module_1 = require("./token/token.module");
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
                    typegooseClass: user_model_1.UserModel,
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
//# sourceMappingURL=auth.module.js.map