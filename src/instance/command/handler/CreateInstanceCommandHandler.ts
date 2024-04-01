import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateInstanceCommand } from "../CreateInstanceCommand";
import { InstanceRepository } from "../../repository/InstanceRepository";
import { Instance } from "../../instance.entity";

@CommandHandler(CreateInstanceCommand)
export class CreateInstanceCommandHandler implements ICommandHandler<CreateInstanceCommand>{

    constructor(
        private instanceRepository: InstanceRepository
    ) { }

    execute(command: CreateInstanceCommand): Promise<Instance> {
        return this.instanceRepository.save(new Instance(command.userId, command.port, command.mnemonic));
    }
}