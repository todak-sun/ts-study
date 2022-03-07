import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { POSTGRES_CONNECTION } from '../constants';
import { CommentsEntity } from './comments.entity';


@Injectable()
export class CommentsService {
  private readonly logger: ConsoleLogger;
  constructor(
    @InjectRepository(CommentsEntity, POSTGRES_CONNECTION)
    private readonly commentRepository: Repository<CommentsEntity>,
  ) {
    this.logger = new ConsoleLogger(CommentsService.name);
  }
}
