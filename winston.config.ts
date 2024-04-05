import { transports, format } from 'winston';

export const winstonLocalConfig = {
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

export const winstonRecConfig = {
  transports: [
    new transports.Console({
      level: 'info',
    }),
  ],
};
