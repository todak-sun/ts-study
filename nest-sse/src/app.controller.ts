import { Controller, MessageEvent, Req, Sse } from '@nestjs/common';
import { Request } from 'express';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  @Sse('sse')
  sse(@Req() request: Request): Observable<MessageEvent> {
    console.log(request.headers);
    return interval(1000).pipe(
      map((_) => ({ data: { hello: 'world' } } as MessageEvent)),
    );
  }
}
