import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { AxiosInstance, AxiosResponse } from 'axios';
import { encode as queryEncode } from 'querystring';
import { UpbitCommonService } from '../common/upbit-common.service';
import { UPBIT_AXIOS_INSTANCE } from '../configuration/axios.providers';
import { OrderChanceSchema } from './orders.model';

export interface OrderChanceParam {
  market: string;
}

@Injectable()
export class OrdersService {
  private readonly logger: ConsoleLogger;

  constructor(
    @Inject(UPBIT_AXIOS_INSTANCE) private readonly axios: AxiosInstance,
    private readonly upbitCommonService: UpbitCommonService,
  ) {
    this.logger = new ConsoleLogger(OrdersService.name);
  }

  async fetchOrderChance(param: OrderChanceParam): Promise<OrderChanceSchema> {
    const body = {
      market: param.market,
    };
    const queryString = queryEncode(body);
    const token = this.upbitCommonService.createToken({ queryString });

    const res: AxiosResponse<OrderChanceSchema> = await this.axios.get(`/v1/orders/chance?${queryString}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  }
}
