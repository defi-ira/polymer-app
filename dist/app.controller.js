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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const app_service_1 = require("./app.service");
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const chain_service_1 = require("./service/chain_service");
let AppController = class AppController {
    constructor(appService, httpService) {
        this.appService = appService;
        this.httpService = httpService;
    }
    getHello() {
        return this.appService.getHello();
    }
    deployChain() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Deploying chain...');
            const chainService = new chain_service_1.ChainService();
            chainService.createChainRun();
            // chainService.createChainAndSaveToDb();
            return 'Chain deployed!';
        });
    }
    addTransaction(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const chain_port = 9032;
            try {
                const response = yield this.httpService.post(`http://localhost:${chain_port}/add_transaction`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }).subscribe((response) => {
                    return response.data;
                });
            }
            catch (error) {
                throw new Error('Internal Server Erxror');
            }
        });
    }
    addTransactionToChain() {
        return __awaiter(this, void 0, void 0, function* () {
            const chain_port = 9032;
            try {
                const response = yield fetch(`http://localhost:${chain_port}/add_transaction`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ test: "test" })
                });
                const data = yield response.json();
                return data;
            }
            catch (error) {
                throw new Error('Internal Server Error');
            }
        });
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('/deploy'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deployChain", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addTransaction", null);
__decorate([
    (0, common_1.Post)('/chain/:chain_port/add_transaction'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addTransactionToChain", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService, axios_1.HttpService])
], AppController);
