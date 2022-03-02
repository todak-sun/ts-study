import { Test } from '@nestjs/testing';
import e from 'express';
import { AppModule } from './app.module';

describe(`AppModuleTest`, () => {
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it(`Test`, () => {
    console.log(`무지성으로 돌려보자`);
  });
});
