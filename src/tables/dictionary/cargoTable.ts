import { Column } from 'src/core/entities/column';
import { Table } from 'src/core/entities/table';
import { TablesEnum } from 'src/core/enums/tablesEnum';

export class CargoTable implements Table {
  name: TablesEnum;
  description?: string;
  colums: Column[];
  fileAlias: string;

  constructor() {
    this.colums = [
      { alias: 'TCACODCAR', name: 'cod_cargo',  maxLength: 5 },
      { alias: 'TCADESCAR', name: 'dsc_cargo',  maxLength: 40 },
      { alias: 'TCAQTDCAR', name: 'qtd_cargo',  maxLength: 4 },
      { alias: 'TCAGRUINI', name: null,         maxLength: 2 },
      { alias: 'TCAGRUFIM', name: null,         maxLength: 2 },
      { alias: 'TCANUMLEI', name: 'num_lei',    maxLength: 10 },
      { alias: 'TCADATDOF', name: 'dat_diario_oficial',   maxLength: 8 },
      { alias: 'TCANIVCAR', name: null,         maxLength: 2 },
      { alias: 'TCATIPCAR', name: 'tip_cargo',  maxLength: 1 },
      { alias: 'TCACODANT', name: 'cod_anterior_cargo',   maxLength: 4 },
      { alias: 'TCATAFIN1', name: null,         maxLength: 2 },
      { alias: 'TCATAFFI1', name: null,         maxLength: 2 },
      { alias: 'TCATAFIN2', name: null,         maxLength: 2 },
      { alias: 'TCATAFFI2', name: null,         maxLength: 2 },
      { alias: 'TCATAFIN3', name: null,         maxLength: 2 },
      { alias: 'TCATAFFI3', name: null,         maxLength: 2 },
      { alias: 'TCADATEXT', name: 'dat_desativacao',         maxLength: 8 },
      { alias: 'TCANUMEXT', name: 'num_decreto_desativacao',   maxLength: 10, type: 'string' },
    ];
    this.fileAlias = 'SRHTCA.txt';
    this.name = TablesEnum.CARGO;
  }

}
