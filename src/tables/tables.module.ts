import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DbService } from 'src/database/service/db.service';
import { Builder } from './builder/builder';
import { CargoTableContext } from './context/cargoTableContext';

import { TableValidator } from './context/table.validator';

import { FakeController } from './fake.controller';
import { Mediator } from './mediator/mediator';
import { TableMediator } from './mediator/table.mediator';
import { ExportadorService } from './service/exportador.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FakeController],
  providers: [
    ExportadorService,
    TableValidator,
    Builder,
    CargoTableContext,
    { provide: Mediator<string>, useClass: TableMediator },
    DbService,
        {
            provide: 'DB_SERVICE',
            useClass: DbService
        }
  ],
})
export class TablesModule {}
