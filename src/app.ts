import express from 'express';
import { ChainService } from './service/chain_service';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/deploy', (req, res) => {
    console.log('Deploying chain...');
    const chainService = new ChainService();
    chainService.createChainRun();
    // chainService.createChainAndSaveToDb();
    res.send('Chain deployed!');
});

app.post('/chain/:chain_port/add_transaction', async (req, res) => {
    const chain_port = 9032;
    try {
        const response = await fetch(`http://localhost:${chain_port}/add_transaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ test: "test" })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
