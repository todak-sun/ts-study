import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CatsController } from './cats.controller';
import { catsProviders } from './cats.providers';
import { CatsService } from './cats.service';

@Module({
  imports: [DatabaseModule],
  providers: [...catsProviders, CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
