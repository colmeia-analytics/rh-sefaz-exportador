import { Controller, Get, Query } from '@nestjs/common';
import { DbService } from './database/service/db.service';

@Controller("/")
export class AppController {
  constructor( private readonly db: DbService) {}
  @Get('')
  public buildFile() {
    return this.db.findOne("select * from sgp.cargo limit 1");
  }
}
