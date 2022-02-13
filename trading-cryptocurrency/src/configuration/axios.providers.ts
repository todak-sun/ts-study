import { ConfigService } from '@nestjs/config';
import axios, { AxiosRequestConfig } from 'axios';
import { sign } from 'jsonwebtoken';

import { v4 } from 'uuid';
const getInstance = (options: AxiosRequestConfig<any>) => {
  const instance = axios.create(options);
  instance.interceptors.request.use(
    (config: AxiosRequestConfig<any>) => {
      console.log(
        `[${config.method.toUpperCase()}] ${[config.baseURL, config.url].join(
          '',
        )}`,
      );
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return instance;
};

export const UPBIT_AXIOS_INSTANCE = `UPBIT_AXIOS_INSTANCE`;

export const axiosProviders = [
  {
    provide: UPBIT_AXIOS_INSTANCE,
    useFactory: (configService: ConfigService) => {
      // const payload = {
      //   access_key: configService.get<string>(`UPBIT_ACCESS_KEY`),
      //   nonce: v4(),
      // };
      // const JWT = sign(payload, configService.get<string>(`UPBIT_SECRET_KEY`));
      // console.log(`jwt : ${JWT}`);
      return getInstance({
        baseURL: configService.get<string>(`UPBIT_API_HOST`),
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${JWT}`,
        },
      });
    },
    inject: [ConfigService],
  },
];
