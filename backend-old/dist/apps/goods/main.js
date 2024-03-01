/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/goods/src/goods.controller.ts":
/*!********************************************!*\
  !*** ./apps/goods/src/goods.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoodsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const goods_service_1 = __webpack_require__(/*! ./goods.service */ "./apps/goods/src/goods.service.ts");
let GoodsController = class GoodsController {
    constructor(goodsService) {
        this.goodsService = goodsService;
    }
    async getHello() {
        return 'Hello World!';
    }
    async getFiltered(supplier) {
        return this.goodsService.getFiltered(supplier);
    }
    async getFirst(supplier) {
        return this.goodsService.getFirst(supplier);
    }
    async getExtract(supplier, fieldName, operation) {
        return this.goodsService.getExtract(supplier, fieldName, operation);
    }
    async getOrders() {
        return this.goodsService.getOrders();
    }
    async addOrder(order) {
        return this.goodsService.addOrder();
    }
};
exports.GoodsController = GoodsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('goods/{supplier}/filtered'),
    __param(0, (0, common_1.Param)('supplier')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getFiltered", null);
__decorate([
    (0, common_1.Get)('goods/{supplier}/first'),
    __param(0, (0, common_1.Param)('supplier')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getFirst", null);
__decorate([
    (0, common_1.Get)('goods/{supplier}/extract/{field-name}/{operation}'),
    __param(0, (0, common_1.Param)('supplier')),
    __param(1, (0, common_1.Param)('field-name')),
    __param(2, (0, common_1.Param)('operation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getExtract", null);
__decorate([
    (0, common_1.Get)('orders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Post)('orders/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoodsController.prototype, "addOrder", null);
exports.GoodsController = GoodsController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [typeof (_a = typeof goods_service_1.GoodsService !== "undefined" && goods_service_1.GoodsService) === "function" ? _a : Object])
], GoodsController);


/***/ }),

/***/ "./apps/goods/src/goods.module.ts":
/*!****************************************!*\
  !*** ./apps/goods/src/goods.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoodsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const goods_controller_1 = __webpack_require__(/*! ./goods.controller */ "./apps/goods/src/goods.controller.ts");
const goods_service_1 = __webpack_require__(/*! ./goods.service */ "./apps/goods/src/goods.service.ts");
const update_goods_module_1 = __webpack_require__(/*! ./update-goods/update-goods.module */ "./apps/goods/src/update-goods/update-goods.module.ts");
let GoodsModule = class GoodsModule {
};
exports.GoodsModule = GoodsModule;
exports.GoodsModule = GoodsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', './apps/goods/.env']
            }),
            update_goods_module_1.UpdateGoodsModule
        ],
        controllers: [goods_controller_1.GoodsController],
        providers: [goods_service_1.GoodsService]
    })
], GoodsModule);


/***/ }),

/***/ "./apps/goods/src/goods.service.ts":
/*!*****************************************!*\
  !*** ./apps/goods/src/goods.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoodsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let GoodsService = class GoodsService {
    async getFiltered(supplier) {
        return { goods: [] };
    }
    async getFirst(supplier) {
        return { commodity: {} };
    }
    async getExtract(supplier, fieldName, operation) {
        return {};
    }
    async getOrders() {
        return { orders: [] };
    }
    async addOrder() {
    }
};
exports.GoodsService = GoodsService;
exports.GoodsService = GoodsService = __decorate([
    (0, common_1.Injectable)()
], GoodsService);


/***/ }),

/***/ "./apps/goods/src/update-goods/update-goods.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/goods/src/update-goods/update-goods.controller.ts ***!
  \****************************************************************/
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
exports.UpdateGoodsController = void 0;
const microservices_1 = __webpack_require__(/*! @app/microservices */ "./libs/microservices/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_2 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const update_goods_service_1 = __webpack_require__(/*! ./update-goods.service */ "./apps/goods/src/update-goods/update-goods.service.ts");
let UpdateGoodsController = class UpdateGoodsController {
    constructor(updateGoodsService) {
        this.updateGoodsService = updateGoodsService;
    }
    update(updateUpdateGoodDto) {
        return this.updateGoodsService.update(updateUpdateGoodDto.id, updateUpdateGoodDto);
    }
};
exports.UpdateGoodsController = UpdateGoodsController;
__decorate([
    (0, microservices_2.MessagePattern)(microservices_1.MicroservicesEndpoints.updateGoods),
    __param(0, (0, microservices_2.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UpdateGoodsController.prototype, "update", null);
exports.UpdateGoodsController = UpdateGoodsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof update_goods_service_1.UpdateGoodsService !== "undefined" && update_goods_service_1.UpdateGoodsService) === "function" ? _a : Object])
], UpdateGoodsController);


/***/ }),

/***/ "./apps/goods/src/update-goods/update-goods.module.ts":
/*!************************************************************!*\
  !*** ./apps/goods/src/update-goods/update-goods.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateGoodsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const update_goods_service_1 = __webpack_require__(/*! ./update-goods.service */ "./apps/goods/src/update-goods/update-goods.service.ts");
const update_goods_controller_1 = __webpack_require__(/*! ./update-goods.controller */ "./apps/goods/src/update-goods/update-goods.controller.ts");
let UpdateGoodsModule = class UpdateGoodsModule {
};
exports.UpdateGoodsModule = UpdateGoodsModule;
exports.UpdateGoodsModule = UpdateGoodsModule = __decorate([
    (0, common_1.Module)({
        controllers: [update_goods_controller_1.UpdateGoodsController],
        providers: [update_goods_service_1.UpdateGoodsService],
    })
], UpdateGoodsModule);


/***/ }),

/***/ "./apps/goods/src/update-goods/update-goods.service.ts":
/*!*************************************************************!*\
  !*** ./apps/goods/src/update-goods/update-goods.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateGoodsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UpdateGoodsService = class UpdateGoodsService {
    update(id, updateUpdateGoodDto) {
        return `This action updates a #${id} updateGood`;
    }
};
exports.UpdateGoodsService = UpdateGoodsService;
exports.UpdateGoodsService = UpdateGoodsService = __decorate([
    (0, common_1.Injectable)()
], UpdateGoodsService);


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


/***/ }),

/***/ "./libs/microservices/src/constants/microservices.constants.ts":
/*!*********************************************************************!*\
  !*** ./libs/microservices/src/constants/microservices.constants.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MicroservicesEndpoints = void 0;
exports.MicroservicesEndpoints = {
    updateGoods: 'update-goods'
};


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
__exportStar(__webpack_require__(/*! ./microservice.connect */ "./libs/microservices/src/microservice.connect.ts"), exports);
__exportStar(__webpack_require__(/*! ./microservice.start */ "./libs/microservices/src/microservice.start.ts"), exports);


/***/ }),

/***/ "./libs/microservices/src/microservice.connect.ts":
/*!********************************************************!*\
  !*** ./libs/microservices/src/microservice.connect.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connectToRabbitMqMicroservice = void 0;
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const connectToRabbitMqMicroservice = (app, queue) => {
    const configService = app.get(config_1.ConfigService);
    const USER = configService.getOrThrow('RABBITMQ_DEFAULT_USER');
    const PASSWORD = configService.getOrThrow('RABBITMQ_DEFAULT_PASS');
    const HOST = configService.getOrThrow('RABBITMQ_HOST');
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
            queue,
        }
    });
};
exports.connectToRabbitMqMicroservice = connectToRabbitMqMicroservice;


/***/ }),

/***/ "./libs/microservices/src/microservice.start.ts":
/*!******************************************************!*\
  !*** ./libs/microservices/src/microservice.start.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultStartMicroservice = void 0;
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const defaultStartMicroservice = (app) => {
    const configService = app.get(config_1.ConfigService);
    app.startAllMicroservices();
    app.listen(configService.get('PORT'), '0.0.0.0');
};
exports.defaultStartMicroservice = defaultStartMicroservice;


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

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

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
/*!********************************!*\
  !*** ./apps/goods/src/main.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const microservices_1 = __webpack_require__(/*! @app/microservices */ "./libs/microservices/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const goods_module_1 = __webpack_require__(/*! ./goods.module */ "./apps/goods/src/goods.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(goods_module_1.GoodsModule);
    app.useLogger(common_1.Logger);
    app.enableCors();
    (0, microservices_1.connectToRabbitMqMicroservice)(app, 'goods');
    (0, microservices_1.defaultStartMicroservice)(app);
}
bootstrap();

})();

/******/ })()
;