import { Inject, Injectable } from '@nestjs/common';
import { Table } from 'src/core/entities/table';
import { DbService } from 'src/database/service/db.service';
import { Builder } from '../builder/builder';
import { Context } from './context';
import { TableValidator } from './table.validator';

@Injectable()
export class CargoTableContext implements Context {

  @Inject('DB_SERVICE')
  private readonly dbService: DbService

  constructor(
    private readonly builder: Builder,
    private validator: TableValidator,
  ) {}
  async execute(table: Table): Promise<void> {
    const data = await this.dbService.query<Array<{ [key: string]: any }>>(this.getSql());
    const validatedData = this.validator.validate(table, data);
    this.builder.build(table, validatedData);
  }

  private getSql() {
    return "select * from sgp.cargo limit 30";
  }

}
