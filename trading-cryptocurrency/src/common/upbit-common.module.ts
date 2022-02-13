import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UpbitCommonService } from './upbit-common.service';

@Module({
  imports: [ConfigModule],
  providers: [UpbitCommonService],
  exports: [UpbitCommonService],
})
export class UpbitCommonModule {}
