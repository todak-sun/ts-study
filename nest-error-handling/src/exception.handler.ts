import { Injectable, ConsoleLogger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CustomError } from './custom.error';

@Injectable()
export class ExceptionHandler {
  constructor(private readonly logger: ConsoleLogger) {
    this.logger.setContext(ExceptionHandler.name);
  }

  @OnEvent(CustomError.name)
  handleNormalError(err: CustomError): void {
    this.logger.log(JSON.stringify(err.getPayload()));
  }
}
