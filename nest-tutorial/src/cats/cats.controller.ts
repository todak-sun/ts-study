import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.save(createCatDto);
    return createCatDto;
  }

  @Get('/error')
  async error() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    console.log(id);
    return `This action return a #${id} cat`;
  }
}
