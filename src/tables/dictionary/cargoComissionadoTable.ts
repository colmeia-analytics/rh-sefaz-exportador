import { Column } from 'src/core/entities/column';
import { Table } from 'src/core/entities/table';
import { TablesEnum } from 'src/core/enums/tablesEnum';

export class CargoComissionadoTable implements Table {
  name: TablesEnum;
  description?: string;
  colums: Column[];
  fileAlias: string;

  constructor() {
    this.colums = [
      { alias: 'TFUCODFUN', name: 'cod_cargo_comissionado',     maxLength: 5 },
      { alias: 'TFUDESFUN', name: 'dsc_cargo_comissionado',     maxLength: 4 },
      { alias: 'TFUPORFUN', name: 'num_ato',                    maxLength: 8 },
      { alias: 'TFUDTAPOR', name: 'dat_diario_oficial',         maxLength: 8 },
      { alias: 'TFUHIERAR', name: 'hierarquia',                 maxLength: 4 },
      { alias: 'TFURISVID', name: 'ris_vida',                   maxLength: 1 },
      { alias: 'TFUCODANT', name: 'cod_cargo_comissionado_ant', maxLength: 4 },
      { alias: 'TFUTIPFUN', name: 'tip_cargo_comissionado',     maxLength: 1 },
      { alias: 'TFUDATEXT', name: 'dat_desativacao',            maxLength: 8 },
      { alias: 'TFUNUMEXT', name: 'num_lei_desativacao',        maxLength: 10 }
    ];
    this.fileAlias = 'SRHFUN.txt';
    this.name = TablesEnum.CARGO_COMISSIONADO;
  }

}
