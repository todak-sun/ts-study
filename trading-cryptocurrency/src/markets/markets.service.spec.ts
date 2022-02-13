import { Test } from '@nestjs/testing';
import { MarketsService } from './markets.service';
import { ConfigModule } from '@nestjs/config';
import { MarketsModule } from './markets.module';
describe(`MarketsServiceTest`, () => {
  let service: MarketsService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ envFilePath: [`.env`] }), MarketsModule],
    }).compile();

    service = module.get(MarketsService);
  });

  it(`MarketsService 인스턴스가 초기화된다.`, () => {
    expect(service).toBeDefined();
  });

  it(`fetchAllMarkets => 거래가능한 모든 마켓 목록 조회`, async () => {
    const data = await service.fetchAllMarkets();
    console.log(JSON.stringify(data));
  });
});
