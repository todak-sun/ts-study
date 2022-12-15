import { Injectable } from '@nestjs/common';

import { CustomError } from './custom.error';
import { ErrorCaptureService } from './error-capture.service';

@Injectable()
export class AppService {
  private flag = 1;

  constructor(private readonly errorCaptureService: ErrorCaptureService) {}

  start() {
    setInterval(() => {
      try {
        this.throwError();
      } catch (err) {
        return this.errorCaptureService.capture(err);
      }
    }, 1000);
  }

  throwError() {
    this.flag = this.flag * -1;
    if (this.flag < 0) {
      throw new CustomError(`사용자 정의 에러 발생`);
    } else {
      throw new Error(`모르는 에러 발생`);
    }
  }
}
