import { Injectable } from '@nestjs/common';
import { Column } from 'src/core/entities/column';
import { Table } from 'src/core/entities/table';
import * as moment from 'moment';

@Injectable()
export class TableValidator {
  validate(table: Table, data: Array<{ [key: string]: any }>) {
    const tableFields = table.colums;
    const newData: Array<{ [key: string]: any }> = [];
    
    data.forEach((lineData) => {

      const keys = Object.keys(lineData);
      const newObject = {};
      
      tableFields.forEach((columnConfigLine) => {
        const currentObject = lineData;
        
        const currentField = keys.find((field) => field == columnConfigLine.name);
      
        if (currentField != undefined) {
          newObject[columnConfigLine.alias] = this.completeWithBlank(currentObject[columnConfigLine.name], columnConfigLine);
        } else {
          newObject[columnConfigLine.alias] = this.completeWithBlank(null, columnConfigLine);
        }
      
      });

      newData.push(newObject);
      
    });

    return newData;
  }

  private completeWithBlank(val: any, column: Column) {
    
    // retorna apenas espaco em branco definido na configuracao da coluna
    if(val == null) {
      return this.addSpace(null, column.maxLength, false);
    }

    const value = column.type == 'string' ? String(val) : val;

    let value_ = String(value);
    
    // verifica se o valor é uma data e remote os "-"
    if(moment(value, "YYYY-MM-DD", true).isValid()) {
      value_ = moment(value_, "YYYY-MM-DD").format("YYYYMMDD");
    }

    const qtdCaracteres = value_.length;
    const qtdEspacoParaPreencher =  column.maxLength - qtdCaracteres;

    if (qtdCaracteres < column.maxLength) {
      if(typeof value == 'string') {
        value_ = this.addSpace(value_, qtdEspacoParaPreencher, false);
      }
      if(typeof value == 'number') {
        value_ = this.addSpace(value_, qtdEspacoParaPreencher, true);
      }
    }else{
      value_ = this.addSpace(value_, qtdEspacoParaPreencher, false);
    }

    return value_;
  }

  private addSpace(value: any, size: number, inverter: boolean) {
    
    if (value == null) {
      return " ".repeat(size); 
    }

    if(inverter) {
      return " ".repeat(size) + value;
    }

    return value + " ".repeat(size); 

  }

}
