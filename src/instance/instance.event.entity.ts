import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InstanceEvent {
    
    @PrimaryGeneratedColumn()
    id?: number;

    @Column('jsonb')
    event: any;

    @Column()
    timestamp?: Date;

    constructor(event: any) {
        this.event = event;
        this.timestamp = new Date();
    }
}
