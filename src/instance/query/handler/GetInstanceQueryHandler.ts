import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetInstanceQuery } from "../model/GetInstanceQuery";
import { Repository } from "typeorm";
import { InstanceEvent } from "../../instance.event.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Instance } from "../../instance.entity";

@QueryHandler(GetInstanceQuery)
export class GetInstanceQueryHandler implements IQueryHandler<GetInstanceQuery>{

    constructor(
        @InjectRepository(InstanceEvent)
        private eventRepository: Repository<InstanceEvent>
    ) { }
    
    execute(query: any): Promise<any> {
        return this.eventRepository.find({
            where: { id: query.aggregateId },
        });
    }
}
