"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileDto = void 0;
class UserProfileDto {
    constructor(userModel) {
        this.id = userModel._id;
        this.email = userModel.email;
        this.isActivated = userModel.emailConfirmed;
    }
}
exports.UserProfileDto = UserProfileDto;
//# sourceMappingURL=user-profile.dto.js.map