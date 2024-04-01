import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { InstanceService } from './instance.service';
import { Instance } from './instance.entity';

@Controller('instance')
export class InstanceController {
    constructor(
        private readonly instanceService: InstanceService,
        ) {}

    @Post()
    create(@Body() createInstanceRequest: CreateInstanceRequest): Promise<Instance> {
        return this.instanceService.create(createInstanceRequest);
    }

    @Get(':id')
    get(@Param('id') id: string): Promise<Instance> {
        return this.instanceService.getById(id);
    }
}