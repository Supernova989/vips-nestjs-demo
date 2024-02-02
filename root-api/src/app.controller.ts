import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

  @Get('say-hi')
  getHello() {
    return this.natsClient.send({ cmd: 'say-hi-command' }, { numValue1: 10 });
  }
}
