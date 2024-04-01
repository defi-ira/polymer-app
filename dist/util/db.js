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
exports.addChainRun = void 0;
const pg_1 = require("pg");
// Initialize the pool
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'db',
    database: 'polymer',
    password: 'password',
    port: 5432,
});
function addChainRun(run) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `
        INSERT INTO chain_run(user_id, chain_type, image_size, run_id, start_time, end_time, local_machine_name, local_port)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    `;
        const values = [run.userId, run.chainType, run.imageSize, run.runId, run.startTime, run.endTime, run.localMachineName, run.localPort];
        try {
            const config = {
                text: query,
                values,
            };
            yield pool.query(config);
        }
        catch (err) {
            console.error('Error adding chain run:', err);
        }
    });
}
exports.addChainRun = addChainRun;
