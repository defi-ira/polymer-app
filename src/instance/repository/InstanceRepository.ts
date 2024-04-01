import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";
import { Instance } from "../instance.entity";


@Injectable()
export class InstanceRepository {
    constructor(
        @InjectRepository(Instance)
        private instanceRepository: Repository<Instance>
    ) { }

    async save(instance: Instance): Promise<Instance> {
        return this.instanceRepository.save(instance);
    }

    async findOneById(id: string): Promise<Instance | null> {
        return this.instanceRepository.findOne({
            where: { id: id },
        });
    }
}