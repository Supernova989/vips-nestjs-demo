import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'say-hi-command' })
  sayHello() {
    return 'Here is a Hello for you';
  }
}
