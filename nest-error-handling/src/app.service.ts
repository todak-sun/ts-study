import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CustomError } from './custom.error';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  start() {
    setInterval(() => {
      try {
        this.throwError();
      } catch (err) {
        if (err instanceof CustomError) {
          console.log(err.name);
          this.eventEmitter.emit(CustomError.name, err);
        }
      }
    }, 1000);
  }

  throwError() {
    throw new CustomError(`사용자 정의 에러 발생`);
  }
}
