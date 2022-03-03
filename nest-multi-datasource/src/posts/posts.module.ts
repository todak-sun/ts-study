import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MSSQL_CONNECTION } from '../app.module';
import { PostsEntity } from './posts.entity';
import { PostsService } from './posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostsEntity], MSSQL_CONNECTION)],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
