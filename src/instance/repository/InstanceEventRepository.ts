import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { InstanceEvent } from "../instance.event.entity";


@Injectable()
export class InstanceEventRepository {

    constructor(
        @InjectRepository(InstanceEvent)
        private instanceEventRepository: Repository<InstanceEvent>
    ) { }

    async save(instanceEvent: InstanceEvent): Promise<InstanceEvent> {
        return this.instanceEventRepository.save(new InstanceEvent(instanceEvent));
    }

    async findOneById(id: string): Promise<InstanceEvent | null> {
        return this.instanceEventRepository.findOne({
            where: { id: parseInt(id) },
        });
    }
}