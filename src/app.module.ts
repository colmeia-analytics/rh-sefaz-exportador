import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { DatabaseModule } from './database/database.module';
import { DbService } from './database/service/db.service';
import { TablesModule } from './tables/tables.module';

@Module({
  imports: [TablesModule, DatabaseModule],
  controllers: [AppController],
  providers: [ DbService,
    {
        provide: 'DB_SERVICE',
        useClass: DbService
    }],
})
export class AppModule {}
