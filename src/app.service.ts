import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(private readonly loggerService: LoggerService) {}

  getHello(): string {
    this.loggerService.log('Hello World! from AppService');
    return 'Hello World!';
  }
}
