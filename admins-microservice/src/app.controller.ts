import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'say-hi-command' })
  sayHello(@Payload() data: any) {
    return { text: 'Here is a Hello for you', value: data.numValue1 + 5 };
  }
}
