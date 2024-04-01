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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainService = void 0;
const chain_util_1 = require("../util/chain_util");
const db_1 = require("../util/db");
class ChainService {
    createChainRun() {
        return __awaiter(this, void 0, void 0, function* () {
            const port = 9023;
            const chain = yield (0, chain_util_1.startContainer)(port);
            const chainRun = {
                userId: 1,
                chainType: 'docker',
                imageSize: 100,
                runId: 1,
                startTime: new Date(),
                endTime: new Date(),
                localMachineName: 'localhost',
                localPort: port,
            };
            yield (0, db_1.addChainRun)(chainRun);
            console.log("chain run successful on port 9023");
        });
    }
}
exports.ChainService = ChainService;
