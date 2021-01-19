import { Controller, Get, Param, Query } from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { AppService } from './app.service';

@Controller('animals')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  getHello(@Param('id') id: number): any {

    return this.appService.getAnimal(id)
  }
}
