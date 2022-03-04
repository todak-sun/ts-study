import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsEntity } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postsRepository: Repository<PostsEntity>,
  ) {}

  test(): void {
    console.log(`hello`);
  }
}
