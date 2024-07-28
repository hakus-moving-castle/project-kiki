import { logger } from '@repo/logger';

const samples = {
  logger() {
    logger.error('logger error message');
    logger.warn('logger warn message');
    logger.info('logger info message');
    logger.http('logger http message');
    logger.verbose('logger verbose message');
    logger.debug('logger debug message');
    logger.silly('logger silly message');
  },
};

export default samples;
