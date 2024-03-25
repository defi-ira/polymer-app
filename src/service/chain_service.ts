import { startContainer } from '../util/chain_util';
import { ChainRun, addChainRun } from '../util/db';

class ChainService {

    public async createChainRun() {
        const port = 9023;
        const chain = await startContainer(port);
        
        const chainRun: ChainRun = {
            userId: 1,
            chainType: 'docker',
            imageSize: 100,
            runId: 1,
            startTime: new Date(),
            endTime: new Date(),
            localMachineName: 'localhost',
            localPort: port,
        };
        await addChainRun(chainRun);
        
        console.log("chain run successful on port 9023");
    }
}

export { ChainService };