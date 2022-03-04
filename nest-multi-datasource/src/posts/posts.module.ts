import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from './posts.entity';
import { PostsService } from './posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity])],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
