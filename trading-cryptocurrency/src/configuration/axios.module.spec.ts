import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AxiosInstance } from 'axios';
import { AxiosModule } from './axios.module';
import { UPBIT_AXIOS_INSTANCE } from './axios.providers';
describe(`AxiosModuleTest`, () => {
  let instance: AxiosInstance;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ envFilePath: ['.env'] }), AxiosModule],
    }).compile();

    instance = module.get(UPBIT_AXIOS_INSTANCE);
  });

  it(`AxiosModule을 통해 필요한 axiosInstance를 얻어낼 수 있다`, () => {
    expect(instance).toBeDefined();
  });
});
