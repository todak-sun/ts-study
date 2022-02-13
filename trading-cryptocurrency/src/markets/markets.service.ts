import { Inject, Injectable } from '@nestjs/common';
import { UPBIT_AXIOS_INSTANCE } from '../configuration/axios.providers';
import { AxiosInstance, AxiosResponse } from 'axios';
import { UpbitCommonService } from '../common/upbit-common.service';

export interface MarketQueryParam {
  withDetail: boolean;
}

@Injectable()
export class MarketsService {
  constructor(
    @Inject(UPBIT_AXIOS_INSTANCE) private readonly axios: AxiosInstance,
    private readonly upbitCommonService: UpbitCommonService,
  ) {}

  async fetchAllMarkets(param: MarketQueryParam = { withDetail: true }) {
    const res: AxiosResponse<any> = await this.axios.get(`/v1/market/all${param.withDetail ? `?isDetails=true` : ''}`);
    return res.data;
  }
}
