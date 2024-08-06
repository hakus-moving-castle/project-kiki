/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { SERVICE_NAME } from '@configs';
import { createLogger } from '@repo/util-logger';
import path from 'path';
import { fileURLToPath } from 'url';

export const logger = createLogger(SERVICE_NAME);

export const __dirname = path.dirname(fileURLToPath(import.meta.url));
