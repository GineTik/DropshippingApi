"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=allowed-host.model.js.map