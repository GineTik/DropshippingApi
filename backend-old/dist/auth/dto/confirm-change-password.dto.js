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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmChangePasswordDto = void 0;
const class_validator_1 = require("class-validator");
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
//# sourceMappingURL=confirm-change-password.dto.js.map