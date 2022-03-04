import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { POSTGRES_CONNECTION } from '../app.module';
import { CommentsEntity } from './comments.entity';
import { CommentsService } from './comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([CommentsEntity], POSTGRES_CONNECTION)],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
