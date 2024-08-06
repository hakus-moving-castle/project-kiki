import winston from 'winston';

const { combine, timestamp, align, colorize, printf, errors, json } =
  winston.format;

const errorsFormat = errors({ stack: true });
const timestampFormat = timestamp({ format: 'YYYY-MM-DD HH:mm:ss' });

export const prettify = combine(
  errorsFormat,
  timestampFormat,
  colorize({ all: true }),
  align(),
  printf((info) => {
    const service = info.service ? `[${info.service.toUpperCase()}]` : '';
    const stack = info.stack ? `\n${info.stack}` : '';
    return `[${info.timestamp}] ${service} ${info.level}: ${info.message} ${stack}`;
  }),
);

export const toJson = combine(errorsFormat, timestampFormat, json());
