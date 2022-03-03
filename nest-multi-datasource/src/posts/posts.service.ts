import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MSSQL_CONNECTION } from '../app.module';
import { PostsEntity } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity, MSSQL_CONNECTION)
    private readonly repository: Repository<PostsEntity>,
  ) {}
}
