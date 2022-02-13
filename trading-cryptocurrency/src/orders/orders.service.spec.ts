import { Test } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './orders.module';

describe(`OrdersServiceTest`, () => {
  let ordersService: OrdersService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: ['.env'],
        }),
        OrdersModule,
      ],
    }).compile();
    ordersService = module.get(OrdersService);
  });

  it(`마켓별 주문 가능 정보를 확인한다.`, async () => {
    await ordersService.fetchOrderChance({ market: `KRW-BTC` });
  });

  
});
