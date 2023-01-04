import { Injectable } from '@nestjs/common';
import { Table } from 'src/core/entities/table';
var fs = require('fs');
@Injectable()
export class Builder {
  build(table: Table, data: Array<{ [key: string]: string }>) {

    const newData = data.map( m => Object.values(m));
    
    var file = fs.createWriteStream("./arquivos/" + table.fileAlias);
    file.on('error', function(err) { /* error handling */ });
    newData.forEach(function(v) { file.write(v.join('#') + '\n'); });
    file.end();
  
  }

  
}
