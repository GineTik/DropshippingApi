"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const token_module_1 = require("../auth/token/token.module");
const allowed_hosts_module_1 = require("./allowed-hosts/allowed-hosts.module");
const api_keys_module_1 = require("./api-keys/api-keys.module");
const user_model_1 = require("./models/user.model");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            token_module_1.TokenModule,
            nestjs_typegoose_1.TypegooseModule.forFeature([{
                    typegooseClass: user_model_1.UserModel,
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
//# sourceMappingURL=user.module.js.map