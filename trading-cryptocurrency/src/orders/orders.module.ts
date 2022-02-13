import { Module } from '@nestjs/common';
import { UpbitCommonModule } from '../common/upbit-common.module';
import { AxiosModule } from '../configuration/axios.module';
import { OrdersService } from './orders.service';

@Module({
  imports: [AxiosModule, UpbitCommonModule],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
