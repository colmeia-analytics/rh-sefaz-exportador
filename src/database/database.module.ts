import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { DbService } from './service/db.service';

@Module({
    providers: [...databaseProviders, DbService],
    exports: [...databaseProviders, DbService]
})
export class DatabaseModule {}
