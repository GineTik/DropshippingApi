"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongoConfig = void 0;
const getMongoConfig = async (configService) => ({
    uri: configService.get('MONGO_URI'),
});
exports.getMongoConfig = getMongoConfig;
//# sourceMappingURL=mongo.config.js.map