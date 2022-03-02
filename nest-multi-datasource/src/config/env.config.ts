import { DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

export const envConfiguration: DynamicModule = ConfigModule.forRoot({
  envFilePath: `.env`,
  isGlobal: true,
});
