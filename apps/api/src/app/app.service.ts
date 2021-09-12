import { Injectable } from '@nestjs/common';
import { Message } from '@sfeir-talk-swagger/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
