import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { UPBIT_AXIOS_INSTANCE } from '../configuration/axios.providers';
import { AxiosInstance, AxiosResponse } from 'axios';
import { UpbitCommonService } from '../common/upbit-common.service';

export interface UpbitAccount {
  currency: string;
  balance: string;
  locked: string;
  avg_buy_price: string;
  avg_buy_price_modified: string;
  unit_currency: string;
}

@Injectable()
export class AccountService {
  private readonly logger: ConsoleLogger;

  constructor(
    @Inject(UPBIT_AXIOS_INSTANCE) private readonly axios: AxiosInstance,
    private readonly upbitCommonService: UpbitCommonService,
  ) {
    this.logger = new ConsoleLogger(AccountService.name);
  }

  async fetchAllAccounts(): Promise<UpbitAccount> {
    const res: AxiosResponse<UpbitAccount> = await this.axios.get('/v1/accounts', {
      headers: {
        Authorization: `Bearer ${this.upbitCommonService.createToken()}`,
      },
    });

    return res.data;
  }
}
