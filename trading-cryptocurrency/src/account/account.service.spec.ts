import { Test } from '@nestjs/testing';
import { AccountModule } from './account.module';
import { AccountService } from './account.service';
import { ConfigModule } from '@nestjs/config';

describe(`AccountServiceTest`, () => {
  let accountService: AccountService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: ['.env'],
        }),
        AccountModule,
      ],
    }).compile();
    accountService = module.get(AccountService);
  });

  it(`보유한 계좌 목록을 모두 가져온다.`, async () => {
    const data = await accountService.fetchAllAccounts();
    console.log(JSON.stringify(data));
  });
});
