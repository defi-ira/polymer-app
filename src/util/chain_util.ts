import { exec } from 'child_process';

export function startContainer(externalPort: number) {

    const tsDeployerImage = 'ts-deployer';
    const command = `docker run  -p 9032:3000 ${tsDeployerImage}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`Container started with ID: ${stdout.trim()}`);
    });
}
