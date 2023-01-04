import { HttpException, Injectable } from '@nestjs/common';
import { Table } from 'src/core/entities/table';
import { TablesEnum } from 'src/core/enums/tablesEnum';
import { CargoTableContext } from '../context/cargoTableContext';
import { Context } from '../context/context';
import { CargoComissionadoTable } from '../dictionary/cargoComissionadoTable';
import { CargoTable } from '../dictionary/cargoTable';
import { Mediator } from './mediator';

@Injectable()
export class TableMediator implements Mediator<string> {
  private tablesMapper: Map<TablesEnum, { context: Context; table: Table }>;
  
  constructor(private cargoTableContext: CargoTableContext) {
    this.tablesMapper = new Map();
    
    this.tablesMapper.set(TablesEnum.CARGO, {
      context: this.cargoTableContext,
      table: new CargoTable(),
    });

    this.tablesMapper.set(TablesEnum.CARGO_COMISSIONADO, {
      context: this.cargoTableContext,
      table: new CargoComissionadoTable(),
    });

  }

  execute(data: string): void {
    const current = this.tablesMapper.get(data as TablesEnum);
    if (current) {
      current.context.execute(current.table);
    }else{
      throw new HttpException("Tabela não registrada", 400);
    }
  }
}
