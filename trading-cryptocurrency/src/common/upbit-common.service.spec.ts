import { Test } from '@nestjs/testing';
import { UpbitCommonService } from './upbit-common.service';
import { ConfigModule } from '@nestjs/config';
import { UpbitCommonModule } from './upbit-common.module';

describe(`UpbitCommonServiceTest`, () => {
  let service: UpbitCommonService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ envFilePath: [`.env`] }), UpbitCommonModule],
    }).compile();
    service = module.get(UpbitCommonService);
  });

  it(`upbitCommonService의 인스턴스가 존재한다.`, () => {
    expect(service).toBeDefined();
  });

  it(`createToken테스트`, () => {
    const token = service.createToken({ queryString: `market=KRW-BTC` });
    expect(token).toBeDefined();
    expect(token).toBeTruthy();
  });
});
