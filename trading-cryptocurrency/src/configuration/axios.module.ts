import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { axiosProviders } from './axios.providers';

@Module({
  imports: [ConfigModule],
  providers: [...axiosProviders],
  exports: [...axiosProviders],
})
export class AxiosModule {}
