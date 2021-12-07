import { Body, Controller, Get, Header, Param, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return 'this action adds a new cat';
  }

  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    console.log(id);
    return `This action return a #${id} cat`;
  }
}
