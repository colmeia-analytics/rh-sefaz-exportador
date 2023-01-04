import { Controller, Get, Query } from '@nestjs/common';
import { Mediator } from './mediator/mediator';

@Controller()
export class FakeController {
  constructor(private mediator: Mediator<string>) {}
  @Get('file')
  public buildFile(@Query('tablename') tablename: string) {
    return this.mediator.execute(tablename);
  }
}
