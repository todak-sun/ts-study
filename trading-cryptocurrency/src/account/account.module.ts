import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AxiosModule } from '../configuration/axios.module';
import { UpbitCommonModule } from '../common/upbit-common.module';

@Module({
  imports: [AxiosModule, UpbitCommonModule],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
