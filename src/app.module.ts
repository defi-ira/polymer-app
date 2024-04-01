import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { InstanceModule } from './instance/instance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstanceDataSource } from './datasource';

@Module({
    imports: [
        HttpModule,
        InstanceModule,
        TypeOrmModule.forRootAsync({
            useFactory: async () => ({
              ...InstanceDataSource.options,
            }),
          }),
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: [],
})
export class AppModule { }
