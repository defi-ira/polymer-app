import { AggregateRoot } from "@nestjs/cqrs";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Instance extends AggregateRoot {
    
    @PrimaryColumn()
    id: string;

    @Column()
    userId: string;

    @Column()
    port: number;

    @Column()
    mnemonic: string;

    constructor(userId: string, port: number, mnemonic: string) {
        super();
        this.autoCommit = true;
        this.id = this.generateUUID();
        this.userId = userId;
        this.port = port;
        this.mnemonic = mnemonic;
    }

    generateUUID(): string {
        return uuidv4();
    }
}