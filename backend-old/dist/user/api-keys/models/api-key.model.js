"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=api-key.model.js.map