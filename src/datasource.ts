import { DataSource } from "typeorm";
import { Instance } from "./instance/instance.entity";
import { InstanceEvent } from "./instance/instance.event.entity";

export const InstanceDataSource = new DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    database: 'polymer',
    password: 'password',
    entities: [Instance, InstanceEvent],
    synchronize: true
});