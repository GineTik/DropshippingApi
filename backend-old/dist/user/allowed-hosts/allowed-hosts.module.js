"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowedHostsModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const user_model_1 = require("../models/user.model");
const allowed_hosts_controller_1 = require("./allowed-hosts.controller");
const allowed_hosts_service_1 = require("./allowed-hosts.service");
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
//# sourceMappingURL=allowed-hosts.module.js.map