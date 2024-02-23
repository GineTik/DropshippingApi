import { Injectable } from '@nestjs/common';

@Injectable()
export class GoodsUnloaderService {
  getHello(): string {
    return 'Hello World!';
  }
}
