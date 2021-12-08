import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CATS_REPOSITORY } from './cats.constants';
import { CatsEntity } from './cats.entitiy';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @Inject(CATS_REPOSITORY)
    private catsRepository: Repository<CatsEntity>,
  ) {}

  async findAll(): Promise<CatsEntity[]> {
    return this.catsRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async save(createCatDto: CreateCatDto) {
    console.log(createCatDto);
    const newCat = new CatsEntity();
    newCat.age = createCatDto.age;
    newCat.name = createCatDto.name;
    newCat.owner = createCatDto.owner;
    console.log(newCat);
    return this.catsRepository.save(newCat);
  }
}
