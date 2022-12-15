import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CustomError } from './custom.error';

@Injectable()
export class ErrorCaptureService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  capture(err: any): void {
    if (err instanceof CustomError) {
      this.eventEmitter.emit(CustomError.name, err);
    } else {
      this.eventEmitter.emit('UNKNOWN', err);
    }
  }
}
