import { Pool, QueryConfig } from 'pg';

// Initialize the pool
const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'polymer',
    password: 'password',
    port: 5432,
});

export interface ChainRun {
    userId: number;
    chainType: string;
    imageSize: number;
    runId: number;
    startTime: Date;
    endTime: Date;
    localMachineName: string;
    localPort: number;
}

export async function addChainRun(run: ChainRun): Promise<void> {
    const query = `
        INSERT INTO chain_run(user_id, chain_type, image_size, run_id, start_time, end_time, local_machine_name, local_port)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    `;
    const values = [run.userId, run.chainType, run.imageSize, run.runId, run.startTime, run.endTime, run.localMachineName, run.localPort];
    
    try {
        const config: QueryConfig = {
            text: query,
            values,
        };
        await pool.query(config);
    } catch (err) {
        console.error('Error adding chain run:', err);
    }
}
