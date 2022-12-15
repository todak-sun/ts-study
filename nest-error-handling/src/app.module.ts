import { ConsoleLogger, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppService } from './app.service';
import { ExceptionHandler } from './exception.handler';
import { ErrorCaptureService } from './error-capture.service';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
      global: true,
    }),
  ],
  providers: [AppService, ConsoleLogger, ExceptionHandler, ErrorCaptureService],
})
export class AppModule {}
