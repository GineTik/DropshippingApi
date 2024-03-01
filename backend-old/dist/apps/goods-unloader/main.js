/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/goods-unloader/src/constants/supplier-yml-catalogs.constants.ts":
/*!******************************************************************************!*\
  !*** ./apps/goods-unloader/src/constants/supplier-yml-catalogs.constants.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YMLCatalogLinks = void 0;
exports.YMLCatalogLinks = {
    'drop-office': 'https://kabinet.dropoffice.com.ua/data/251004b3ad5f58c44d32d94a091cc35c.xml',
    ager: 'https://ager.ua/download/catalog_drop.xml',
    'ms-drop': ''
};


/***/ }),

/***/ "./apps/goods-unloader/src/goods-unloader.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/goods-unloader/src/goods-unloader.controller.ts ***!
  \**************************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoodsUnloaderController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const goods_unloader_service_1 = __webpack_require__(/*! ./goods-unloader.service */ "./apps/goods-unloader/src/goods-unloader.service.ts");
let GoodsUnloaderController = class GoodsUnloaderController {
    constructor(goodsUnloaderService) {
        this.goodsUnloaderService = goodsUnloaderService;
    }
    getHello() {
        return this.goodsUnloaderService.getHello();
    }
};
exports.GoodsUnloaderController = GoodsUnloaderController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], GoodsUnloaderController.prototype, "getHello", null);
exports.GoodsUnloaderController = GoodsUnloaderController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof goods_unloader_service_1.GoodsUnloaderService !== "undefined" && goods_unloader_service_1.GoodsUnloaderService) === "function" ? _a : Object])
], GoodsUnloaderController);


/***/ }),

/***/ "./apps/goods-unloader/src/goods-unloader.module.ts":
/*!**********************************************************!*\
  !*** ./apps/goods-unloader/src/goods-unloader.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoodsUnloaderModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const goods_unloader_controller_1 = __webpack_require__(/*! ./goods-unloader.controller */ "./apps/goods-unloader/src/goods-unloader.controller.ts");
const goods_unloader_service_1 = __webpack_require__(/*! ./goods-unloader.service */ "./apps/goods-unloader/src/goods-unloader.service.ts");
let GoodsUnloaderModule = class GoodsUnloaderModule {
};
exports.GoodsUnloaderModule = GoodsUnloaderModule;
exports.GoodsUnloaderModule = GoodsUnloaderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', './apps/goods/.env']
            })
        ],
        controllers: [goods_unloader_controller_1.GoodsUnloaderController],
        providers: [goods_unloader_service_1.GoodsUnloaderService]
    })
], GoodsUnloaderModule);


/***/ }),

/***/ "./apps/goods-unloader/src/goods-unloader.service.ts":
/*!***********************************************************!*\
  !*** ./apps/goods-unloader/src/goods-unloader.service.ts ***!
  \***********************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoodsUnloaderService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const Xml2js = __webpack_require__(/*! xml2js */ "xml2js");
const supplier_yml_catalogs_constants_1 = __webpack_require__(/*! ./constants/supplier-yml-catalogs.constants */ "./apps/goods-unloader/src/constants/supplier-yml-catalogs.constants.ts");
let GoodsUnloaderService = class GoodsUnloaderService {
    getHello() {
        return 'Hello World!';
    }
    async getGoodsFromYml() {
        const response = await axios_1.default.get(supplier_yml_catalogs_constants_1.YMLCatalogLinks['drop-office']);
        const xmlData = response.data;
        const parser = new Xml2js.Parser({
            trim: true,
            explicitArray: false,
            mergeAttrs: true
        });
        const result = (await parser.parseStringPromise(xmlData))
            ?.yml_catalog;
        console.log(result.shop.offers.offer.length);
        console.log(result.shop.offers.offer[0]);
    }
};
exports.GoodsUnloaderService = GoodsUnloaderService;
__decorate([
    (0, schedule_1.Cron)('0 * * * * *', {
        name: 'get actual goods',
        timeZone: 'Europe/Kiev'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoodsUnloaderService.prototype, "getGoodsFromYml", null);
exports.GoodsUnloaderService = GoodsUnloaderService = __decorate([
    (0, common_1.Injectable)()
], GoodsUnloaderService);


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

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "xml2js":
/*!*************************!*\
  !*** external "xml2js" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("xml2js");

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
/*!*****************************************!*\
  !*** ./apps/goods-unloader/src/main.ts ***!
  \*****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const microservices_1 = __webpack_require__(/*! @app/microservices */ "./libs/microservices/src/index.ts");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const goods_unloader_module_1 = __webpack_require__(/*! ./goods-unloader.module */ "./apps/goods-unloader/src/goods-unloader.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(goods_unloader_module_1.GoodsUnloaderModule);
    (0, microservices_1.connectToRabbitMqMicroservice)(app, 'goods-unloader');
    (0, microservices_1.defaultStartMicroservice)(app);
}
bootstrap();

})();

/******/ })()
;