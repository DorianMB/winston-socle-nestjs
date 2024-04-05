import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { Logger } from 'winston';
import { winstonLocalConfig, winstonRecConfig } from '../../winston.config';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoggerService {
  private readonly logger: Logger;

  constructor(private configService: ConfigService) {
    const env = this.configService.get<string>('NODE_ENV') || 'local';

    const configMap = {
      local: winstonLocalConfig,
      rec: winstonRecConfig,
    };
    this.logger = winston.createLogger(configMap[env] || winstonLocalConfig);
  }

  log(message: string) {
    this.logger.log({ level: 'info', message });
  }

  error(message: string) {
    this.logger.log({ level: 'error', message });
  }

  warn(message: string) {
    this.logger.log({ level: 'warn', message });
  }

  debug(message: string) {
    this.logger.log({ level: 'debug', message });
  }
}
