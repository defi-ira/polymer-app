"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const chain_service_1 = require("./service/chain_service");
exports.app = (0, express_1.default)();
const PORT = 3000;
exports.app.get('/', (req, res) => res.send('Hello World!'));
exports.app.post('/deploy', (req, res) => {
    console.log('Deploying chain...');
    const chainService = new chain_service_1.ChainService();
    chainService.createChainRun();
    // chainService.createChainAndSaveToDb();
    res.send('Chain deployed!');
});
exports.app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const chain_port = 9032;
    try {
        const response = yield fetch(`http://localhost:${chain_port}/add_transaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const data = yield response.json();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.app.post('/chain/:chain_port/add_transaction', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
