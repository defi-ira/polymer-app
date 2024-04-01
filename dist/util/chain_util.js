"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startContainer = void 0;
const child_process_1 = require("child_process");
function startContainer(externalPort) {
    const tsDeployerImage = 'ts-deployer';
    const command = `docker run  -p 9032:3000 ${tsDeployerImage}`;
    (0, child_process_1.exec)(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`Container started with ID: ${stdout.trim()}`);
    });
}
exports.startContainer = startContainer;
