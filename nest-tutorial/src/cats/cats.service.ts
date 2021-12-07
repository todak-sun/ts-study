import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CatsEntity } from './cats.entitiy';
import { CATS_REPOSITORY } from './cats.constants';

@Injectable()
export class CatsService {
  constructor(
    @Inject(CATS_REPOSITORY)
    private photoRepository: Repository<CatsEntity>,
  ) {}

  async findAll(): Promise<CatsEntity[]> {
    return this.photoRepository.find();
  }
}
