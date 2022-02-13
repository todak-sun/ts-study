import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHash } from 'crypto';
import { sign } from 'jsonwebtoken';
import { v4 } from 'uuid';

interface PayloadOptions {
  query_hash: string;
  query_hash_alg: string;
}

interface Payload extends Partial<PayloadOptions> {
  access_key: string;
  nonce: string;
}

export interface CreateTokenOptions {
  queryString: string;
}

@Injectable()
export class UpbitCommonService {
  private readonly secretKey: string;
  private readonly accessKey: string;

  constructor(configService: ConfigService) {
    this.secretKey = configService.get(`UPBIT_SECRET_KEY`);
    this.accessKey = configService.get(`UPBIT_ACCESS_KEY`);
  }

  createToken(options?: CreateTokenOptions): string {
    return sign(this.createPayload(options), this.secretKey);
  }

  private createPayload(options?: CreateTokenOptions): Payload {
    const result: Payload = { access_key: this.accessKey, nonce: v4() };
    if (options) {
      result.query_hash = this.hashQueryString(options.queryString);
      result.query_hash_alg = `SHA512`;
    }
    return result;
  }

  private hashQueryString(data: string): string {
    const hash = createHash(`sha512`);
    return hash.update(data, `utf-8`).digest(`hex`);
  }
}
