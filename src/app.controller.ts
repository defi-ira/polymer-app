import { AppService } from './app.service';
import { Post, Body, Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ChainService } from './service/chain_service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private httpService: HttpService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post('/deploy')
    async deployChain(): Promise<string> {
        console.log('Deploying chain...');
        const chainService = new ChainService();
        chainService.createChainRun();
        // chainService.createChainAndSaveToDb();
        return 'Chain deployed!';
    }

    @Post()
    async addTransaction(@Body() body: any): Promise<any> {
        const chain_port = 9032;
        try {
            const response = await this.httpService.post(`http://localhost:${chain_port}/add_transaction`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).subscribe((response) => {
                return response.data;
            });
        } catch (error) {
            throw new Error('Internal Server Erxror');
        }
    }

    @Post('/chain/:chain_port/add_transaction')
    async addTransactionToChain(): Promise<any> {
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
            return data;
        } catch (error) {
            throw new Error('Internal Server Error');
        }
    }
}
