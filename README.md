## Installation Winston

```bash
$ npm install winston
$ npm install --save-dev @types/winston
```

## Configuration

```bash
# create a winston.config.ts file in the root of the project

import { transports, format } from 'winston';

export const winstonConfig = {
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.simple(),
      ),
    }),
  ],
};
```

## Logger Serivce

```bash
create a logger.service.ts file
```

## Usage

```bash
#import in app.module.ts

@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})

#import in all services you need with constructor

export Class Service {
  constructor(private readonly logger: LoggerService) {}
  
  someMethod() {
    this.logger.log('some message');
  }
}
```

## Environment Variables

```bash
# create a .env file in the root of the project
# use ConfigModule to load the .env file

imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
```
