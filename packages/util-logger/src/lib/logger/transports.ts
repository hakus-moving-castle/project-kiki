import { Logtail } from '@logtail/node';
import { LogtailTransport } from '@logtail/winston';
import winston from 'winston';

import env from '../env';
import { prettify } from './formats';

export const consoleTransport = new winston.transports.Console({
  format: prettify,
});

const logtail = new Logtail(env.LOGTAIL_SOURCE_TOKEN);
export const logtailTransport = new LogtailTransport(logtail);
