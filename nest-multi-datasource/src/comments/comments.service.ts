import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentsEntity } from './comments.entity';
import { POSTGRES_CONNECTION } from '../app.module';
import { Repository } from 'typeorm';

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
