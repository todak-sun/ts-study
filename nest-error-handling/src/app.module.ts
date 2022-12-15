import { ConsoleLogger, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppService } from './app.service';
import { ExceptionHandler } from './exception.handler';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: false,
      global: true,
    }),
  ],
  providers: [AppService, ConsoleLogger, ExceptionHandler],
})
export class AppModule {}
