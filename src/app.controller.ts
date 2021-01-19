import { Controller, Post, Param, Query, Body, Get } from '@nestjs/common';
import { get, STATUS_CODES } from 'http';
import { AppService } from './app.service';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  getPost(@Body('title') title:string, @Body('code') code:string, @Body('text') text: string) {
    return this.appService.potato(title, code, text);
  } 

  @Get()
  print() {
    return this.appService.print()
  }

  @Get('/:title')
  findPost(@Param('title') title: number) {
    return this.appService.findPost(title);
  }

}
