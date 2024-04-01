import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { InstanceController } from './instance.controller';
import { InstanceService } from './instance.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instance } from './instance.entity';
import { CreateInstanceCommandHandler } from './command/handler/CreateInstanceCommandHandler';
import { GetInstanceQueryHandler } from './query/handler/GetInstanceQueryHandler';
import { InstanceRepository } from './repository/InstanceRepository';
import { InstanceEvent } from './instance.event.entity';
import { InstanceDataSource } from '../datasource';
import { InstanceEventRepository } from './repository/InstanceEventRepository';

@Module({
    imports: [
        CqrsModule,
        TypeOrmModule.forFeature([Instance, InstanceEvent]),
    ],
    controllers: [InstanceController],
    providers: [
        InstanceService,
        InstanceRepository,
        InstanceEventRepository,
        CreateInstanceCommandHandler,
        GetInstanceQueryHandler
    ],
})
export class InstanceModule {}