import { Injectable } from '@nestjs/common';
import { Table } from 'src/core/entities/table';
@Injectable()
export abstract class Context {
  abstract execute(table: Table): void;
}
