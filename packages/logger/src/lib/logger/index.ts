import winston from 'winston';

import env from '../env';
import { toJson } from './formats';
import { consoleTransport, logtailTransport } from './transports';

const isProd = process.env.NODE_ENV === 'production';

export const logger = winston.createLogger({
  level: env.LOG_LEVEL,
  format: toJson,
  transports: isProd ? logtailTransport : consoleTransport,
});
