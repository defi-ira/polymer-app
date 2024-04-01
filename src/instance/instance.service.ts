import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InstanceEvent } from './instance.event.entity';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateInstanceCommand } from './command/CreateInstanceCommand';
import { GetInstanceQuery } from './query/model/GetInstanceQuery';
import { Instance } from './instance.entity';
import { InstanceEventRepository } from './repository/InstanceEventRepository';

@Injectable()
export class InstanceService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
        private instanceEventRepository: InstanceEventRepository,
    ) { }

    async create(createInstanceDto: any): Promise<any> {
        console.log('InstanceService.create', createInstanceDto);
        await this.instanceEventRepository.save(createInstanceDto);
        console.log("InstanceService.create: saved event");
        this.commandBus.execute(new CreateInstanceCommand(
            createInstanceDto.userId,
            createInstanceDto.port,
            createInstanceDto.mnemonic,
        ));
    }

    async getById(aggregateId: string): Promise<Instance> {
        return this.queryBus.execute(new GetInstanceQuery(aggregateId));
    }
}
