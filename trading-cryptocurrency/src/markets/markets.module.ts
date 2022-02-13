import { Module } from '@nestjs/common';
import { UpbitCommonModule } from '../common/upbit-common.module';
import { AxiosModule } from '../configuration/axios.module';
import { MarketsService } from './markets.service';

@Module({
  imports: [AxiosModule, UpbitCommonModule],
  providers: [MarketsService],
  exports: [MarketsService],
})
export class MarketsModule {}
