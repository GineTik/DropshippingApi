/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/offers-unloader/src/constants/supplier-yml-catalogs.constants.ts":
/*!*******************************************************************************!*\
  !*** ./apps/offers-unloader/src/constants/supplier-yml-catalogs.constants.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YMLCatalogLinks = void 0;
exports.YMLCatalogLinks = {
    'drop-office': 'https://kabinet.dropoffice.com.ua/data/251004b3ad5f58c44d32d94a091cc35c.xml',
    ager: 'https://ager.ua/download/catalog_drop.xml',
    'ms-drop': 'https://msdrop.com.ua/export/2eOJ/xml'
};


/***/ }),

/***/ "./apps/offers-unloader/src/offers-unloader.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/offers-unloader/src/offers-unloader.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OffersUnloaderController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const offers_unloader_service_1 = __webpack_require__(/*! ./offers-unloader.service */ "./apps/offers-unloader/src/offers-unloader.service.ts");
let OffersUnloaderController = class OffersUnloaderController {
    constructor(offersUnloaderService) {
        this.offersUnloaderService = offersUnloaderService;
    }
    getHello() {
        return this.offersUnloaderService.getHello();
    }
};
exports.OffersUnloaderController = OffersUnloaderController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], OffersUnloaderController.prototype, "getHello", null);
exports.OffersUnloaderController = OffersUnloaderController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof offers_unloader_service_1.OffersUnloaderService !== "undefined" && offers_unloader_service_1.OffersUnloaderService) === "function" ? _a : Object])
], OffersUnloaderController);


/***/ }),

/***/ "./apps/offers-unloader/src/offers-unloader.module.ts":
/*!************************************************************!*\
  !*** ./apps/offers-unloader/src/offers-unloader.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OffersUnloaderModule = void 0;
const microservices_1 = __webpack_require__(/*! @app/microservices */ "./libs/microservices/src/index.ts");
const rabbitmq_module_1 = __webpack_require__(/*! @app/microservices/rabbitmq.module */ "./libs/microservices/src/rabbitmq.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const offers_unloader_controller_1 = __webpack_require__(/*! ./offers-unloader.controller */ "./apps/offers-unloader/src/offers-unloader.controller.ts");
const offers_unloader_service_1 = __webpack_require__(/*! ./offers-unloader.service */ "./apps/offers-unloader/src/offers-unloader.service.ts");
const yml_parser_1 = __webpack_require__(/*! ./yml-parser/yml.parser */ "./apps/offers-unloader/src/yml-parser/yml.parser.ts");
let OffersUnloaderModule = class OffersUnloaderModule {
};
exports.OffersUnloaderModule = OffersUnloaderModule;
exports.OffersUnloaderModule = OffersUnloaderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', './apps/offers-unloader/.env']
            }),
            rabbitmq_module_1.RabbitMqModule.register({
                name: microservices_1.OFFERS
            })
        ],
        controllers: [offers_unloader_controller_1.OffersUnloaderController],
        providers: [offers_unloader_service_1.OffersUnloaderService, yml_parser_1.YmlCatalogParser]
    })
], OffersUnloaderModule);


/***/ }),

/***/ "./apps/offers-unloader/src/offers-unloader.service.ts":
/*!*************************************************************!*\
  !*** ./apps/offers-unloader/src/offers-unloader.service.ts ***!
  \*************************************************************/
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OffersUnloaderService = void 0;
const microservices_1 = __webpack_require__(/*! @app/microservices */ "./libs/microservices/src/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_2 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const Xml2js = __webpack_require__(/*! xml2js */ "xml2js");
const supplier_yml_catalogs_constants_1 = __webpack_require__(/*! ./constants/supplier-yml-catalogs.constants */ "./apps/offers-unloader/src/constants/supplier-yml-catalogs.constants.ts");
const yml_parser_1 = __webpack_require__(/*! ./yml-parser/yml.parser */ "./apps/offers-unloader/src/yml-parser/yml.parser.ts");
let OffersUnloaderService = class OffersUnloaderService {
    constructor(ymlParser, offersService) {
        this.ymlParser = ymlParser;
        this.offersService = offersService;
    }
    getHello() {
        return 'Hello World!';
    }
    async getGoodsFromYml() {
        const response = await axios_1.default.get(supplier_yml_catalogs_constants_1.YMLCatalogLinks['ager']);
        const xmlData = response.data;
        const parser = new Xml2js.Parser({
            trim: true,
            explicitArray: false,
            mergeAttrs: true
        });
        const ymlCatalog = (await parser.parseStringPromise(xmlData))
            ?.yml_catalog;
        const offers = this.ymlParser.parse(ymlCatalog);
        console.log(offers.length);
        this.offersService
            .emit(microservices_1.MicroservicesEndpoints.updateOffers, offers[0])
            .subscribe((_) => {
            console.log('updated');
        });
    }
};
exports.OffersUnloaderService = OffersUnloaderService;
__decorate([
    (0, schedule_1.Cron)('0 * * * * *', {
        name: 'get actual goods',
        timeZone: 'Europe/Kiev'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OffersUnloaderService.prototype, "getGoodsFromYml", null);
exports.OffersUnloaderService = OffersUnloaderService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(microservices_1.OFFERS)),
    __metadata("design:paramtypes", [typeof (_a = typeof yml_parser_1.YmlCatalogParser !== "undefined" && yml_parser_1.YmlCatalogParser) === "function" ? _a : Object, typeof (_b = typeof microservices_2.ClientProxy !== "undefined" && microservices_2.ClientProxy) === "function" ? _b : Object])
], OffersUnloaderService);


/***/ }),

/***/ "./apps/offers-unloader/src/yml-parser/interceptors/category.interceptor.ts":
/*!**********************************************************************************!*\
  !*** ./apps/offers-unloader/src/yml-parser/interceptors/category.interceptor.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryParseInterceptor = void 0;
class CategoryParseInterceptor {
    parse(offer, ymlCatalog) {
        offer.category = this.parseCategory(offer.categoryId, ymlCatalog.shop.categories.category);
        delete offer.categoryId;
        return offer;
    }
    parseCategory(categoryId, allCategories) {
        const category = allCategories.find((c) => c.id == categoryId);
        let parentCategory;
        if (category.parentId) {
            parentCategory = this.parseCategory(category.parentId, allCategories);
        }
        return {
            id: this.tryConvertId(category.id),
            name: category._,
            parent: parentCategory
        };
    }
    tryConvertId(id) {
        return Number.isNaN(Number(id)) ? id : Number(id);
    }
}
exports.CategoryParseInterceptor = CategoryParseInterceptor;


/***/ }),

/***/ "./apps/offers-unloader/src/yml-parser/interceptors/index.ts":
/*!*******************************************************************!*\
  !*** ./apps/offers-unloader/src/yml-parser/interceptors/index.ts ***!
  \*******************************************************************/
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
__exportStar(__webpack_require__(/*! ./category.interceptor */ "./apps/offers-unloader/src/yml-parser/interceptors/category.interceptor.ts"), exports);
__exportStar(__webpack_require__(/*! ./interface.interceptor */ "./apps/offers-unloader/src/yml-parser/interceptors/interface.interceptor.ts"), exports);
__exportStar(__webpack_require__(/*! ./keywords.interceptor */ "./apps/offers-unloader/src/yml-parser/interceptors/keywords.interceptor.ts"), exports);
__exportStar(__webpack_require__(/*! ./parameters.interceptor */ "./apps/offers-unloader/src/yml-parser/interceptors/parameters.interceptor.ts"), exports);
__exportStar(__webpack_require__(/*! ./type.interceptor */ "./apps/offers-unloader/src/yml-parser/interceptors/type.interceptor.ts"), exports);


/***/ }),

/***/ "./apps/offers-unloader/src/yml-parser/interceptors/interface.interceptor.ts":
/*!***********************************************************************************!*\
  !*** ./apps/offers-unloader/src/yml-parser/interceptors/interface.interceptor.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/offers-unloader/src/yml-parser/interceptors/keywords.interceptor.ts":
/*!**********************************************************************************!*\
  !*** ./apps/offers-unloader/src/yml-parser/interceptors/keywords.interceptor.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeywordsParseInterceptor = void 0;
class KeywordsParseInterceptor {
    parse(offer, ymlCatalog) {
        if (offer.keywords) {
            offer.keywords = this.parseKeywords(offer.keywords);
        }
        delete offer.keywords;
        return offer;
    }
    parseKeywords(keywords) {
        return keywords.split(',').map((k) => k.trim());
    }
}
exports.KeywordsParseInterceptor = KeywordsParseInterceptor;


/***/ }),

/***/ "./apps/offers-unloader/src/yml-parser/interceptors/parameters.interceptor.ts":
/*!************************************************************************************!*\
  !*** ./apps/offers-unloader/src/yml-parser/interceptors/parameters.interceptor.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParametersParseInterceptor = void 0;
class ParametersParseInterceptor {
    parse(offer, ymlCatalog) {
        if (offer.param) {
            offer.parameters = this.parseParameters(offer.param);
        }
        delete offer.param;
        return offer;
    }
    parseParameters(parameters) {
        return parameters.map((p) => ({
            name: p.name,
            unit: p.unit,
            value: p._
        }));
    }
}
exports.ParametersParseInterceptor = ParametersParseInterceptor;


/***/ }),

/***/ "./apps/offers-unloader/src/yml-parser/interceptors/to-camel-case.interceptor.ts":
/*!***************************************************************************************!*\
  !*** ./apps/offers-unloader/src/yml-parser/interceptors/to-camel-case.interceptor.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToCamelCaseInterceptor = void 0;
class ToCamelCaseInterceptor {
    parse(offer, ymlCatalog) {
        const result = {};
        Object.keys(offer).forEach((key) => {
            result[this.snakeToCamel(key)] = offer[key];
            delete offer[key];
        });
        return result;
    }
    snakeToCamel(str) {
        return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
    }
}
exports.ToCamelCaseInterceptor = ToCamelCaseInterceptor;


/***/ }),

/***/ "./apps/offers-unloader/src/yml-parser/interceptors/type.interceptor.ts":
/*!******************************************************************************!*\
  !*** ./apps/offers-unloader/src/yml-parser/interceptors/type.interceptor.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeInterceptor = void 0;
class TypeInterceptor {
    parse(offer, ymlCatalog) {
        this.convertToRightType(offer);
    }
    convertToRightType(object) {
        Object.keys(object).forEach((key) => {
            const value = object[key];
            const number = Number(value);
            if (Number.isNaN(number) === false) {
                object[key] = number;
            }
            else if (value === 'true' || value === 'false') {
                object[key] = Boolean(value);
            }
            return object;
        });
    }
}
exports.TypeInterceptor = TypeInterceptor;


/***/ }),

/***/ "./apps/offers-unloader/src/yml-parser/yml.parser.ts":
/*!***********************************************************!*\
  !*** ./apps/offers-unloader/src/yml-parser/yml.parser.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YmlCatalogParser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const interceptors_1 = __webpack_require__(/*! ./interceptors */ "./apps/offers-unloader/src/yml-parser/interceptors/index.ts");
const to_camel_case_interceptor_1 = __webpack_require__(/*! ./interceptors/to-camel-case.interceptor */ "./apps/offers-unloader/src/yml-parser/interceptors/to-camel-case.interceptor.ts");
let YmlCatalogParser = class YmlCatalogParser {
    constructor() {
        this.interceptors = [
            new interceptors_1.CategoryParseInterceptor(),
            new interceptors_1.ParametersParseInterceptor(),
            new interceptors_1.KeywordsParseInterceptor(),
            new to_camel_case_interceptor_1.ToCamelCaseInterceptor(),
            new interceptors_1.TypeInterceptor()
        ];
    }
    parse(ymlCatalog) {
        const parsedOffers = [];
        const offersFromCatalog = ymlCatalog.shop.offers.offer;
        offersFromCatalog.forEach((offer) => {
            this.interceptors.forEach((i) => {
                const result = i.parse(offer, ymlCatalog);
                offer = {
                    ...offer,
                    ...result
                };
            });
            parsedOffers.push(offer);
        });
        return parsedOffers;
    }
};
exports.YmlCatalogParser = YmlCatalogParser;
exports.YmlCatalogParser = YmlCatalogParser = __decorate([
    (0, common_1.Injectable)()
], YmlCatalogParser);


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
__exportStar(__webpack_require__(/*! ./queue.constants */ "./libs/microservices/src/constants/queue.constants.ts"), exports);


/***/ }),

/***/ "./libs/microservices/src/constants/microservices.constants.ts":
/*!*********************************************************************!*\
  !*** ./libs/microservices/src/constants/microservices.constants.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MicroservicesEndpoints = void 0;
exports.MicroservicesEndpoints = {
    updateOffers: 'update-offers'
};


/***/ }),

/***/ "./libs/microservices/src/constants/queue.constants.ts":
/*!*************************************************************!*\
  !*** ./libs/microservices/src/constants/queue.constants.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OFFERS_UNLOADER = exports.ACCOUNT = exports.OFFERS = void 0;
exports.OFFERS = 'offers';
exports.ACCOUNT = 'account';
exports.OFFERS_UNLOADER = 'offers-unloader';


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
__exportStar(__webpack_require__(/*! ./microservice.start */ "./libs/microservices/src/microservice.start.ts"), exports);
__exportStar(__webpack_require__(/*! ./rabbitmq.module */ "./libs/microservices/src/rabbitmq.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./rabbitmq.service */ "./libs/microservices/src/rabbitmq.service.ts"), exports);


/***/ }),

/***/ "./libs/microservices/src/microservice.start.ts":
/*!******************************************************!*\
  !*** ./libs/microservices/src/microservice.start.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultStartMicroservice = void 0;
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const defaultStartMicroservice = async (app) => {
    const configService = app.get(config_1.ConfigService);
    await app.startAllMicroservices();
    console.log('microservices started');
    await app.listen(configService.get('PORT'), '0.0.0.0');
};
exports.defaultStartMicroservice = defaultStartMicroservice;


/***/ }),

/***/ "./libs/microservices/src/rabbitmq.module.ts":
/*!***************************************************!*\
  !*** ./libs/microservices/src/rabbitmq.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RabbitMqModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RabbitMqModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rabbitmq_service_1 = __webpack_require__(/*! ./rabbitmq.service */ "./libs/microservices/src/rabbitmq.service.ts");
let RabbitMqModule = RabbitMqModule_1 = class RabbitMqModule {
    static register({ name }) {
        return {
            module: RabbitMqModule_1,
            imports: [
                microservices_1.ClientsModule.registerAsync([
                    {
                        name,
                        useFactory: (configService) => {
                            const USER = configService.getOrThrow('RABBITMQ_DEFAULT_USER');
                            const PASSWORD = configService.getOrThrow('RABBITMQ_DEFAULT_PASS');
                            const HOST = configService.getOrThrow('RABBITMQ_HOST');
                            return {
                                transport: microservices_1.Transport.RMQ,
                                options: {
                                    urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
                                    queue: name,
                                    noAck: false,
                                    persistent: true,
                                    queueOptions: {
                                        durable: true
                                    }
                                }
                            };
                        },
                        inject: [config_1.ConfigService]
                    }
                ])
            ],
            exports: [microservices_1.ClientsModule]
        };
    }
};
exports.RabbitMqModule = RabbitMqModule;
exports.RabbitMqModule = RabbitMqModule = RabbitMqModule_1 = __decorate([
    (0, common_1.Module)({
        providers: [rabbitmq_service_1.RabbitMqService],
        exports: [rabbitmq_service_1.RabbitMqService]
    })
], RabbitMqModule);


/***/ }),

/***/ "./libs/microservices/src/rabbitmq.service.ts":
/*!****************************************************!*\
  !*** ./libs/microservices/src/rabbitmq.service.ts ***!
  \****************************************************/
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
exports.RabbitMqService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let RabbitMqService = class RabbitMqService {
    constructor(configService) {
        this.configService = configService;
    }
    getOptions(queue) {
        const USER = this.configService.getOrThrow('RABBITMQ_DEFAULT_USER');
        const PASSWORD = this.configService.getOrThrow('RABBITMQ_DEFAULT_PASS');
        const HOST = this.configService.getOrThrow('RABBITMQ_HOST');
        return {
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
                queue: queue,
                queueOptions: {
                    durable: true
                }
            }
        };
    }
};
exports.RabbitMqService = RabbitMqService;
exports.RabbitMqService = RabbitMqService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], RabbitMqService);


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
/*!******************************************!*\
  !*** ./apps/offers-unloader/src/main.ts ***!
  \******************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const offers_unloader_module_1 = __webpack_require__(/*! ./offers-unloader.module */ "./apps/offers-unloader/src/offers-unloader.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(offers_unloader_module_1.OffersUnloaderModule);
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.get('PORT'), '0.0.0.0');
}
bootstrap();

})();

/******/ })()
;