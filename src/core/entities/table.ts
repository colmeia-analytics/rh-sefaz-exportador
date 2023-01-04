import { TablesEnum } from '../enums/tablesEnum';
import { Column } from './column';

export class Table {
  name: TablesEnum;
  description?: string;
  colums: Array<Column>;
  fileAlias: string;
}
