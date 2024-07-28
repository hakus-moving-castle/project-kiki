const express = require('express');
const { logger } = require('@repo/logger');

const PORT = process.env.PORT ?? 3000;

const app = express();

logger.error('logger error message');
logger.warn('logger warn message');
logger.info('logger info message');
logger.http('logger http message');
logger.verbose('logger verbose message');
logger.debug('logger debug message');
logger.silly('logger silly message');

app.listen(PORT, () => console.log(`Server is listening on ${PORT} ...`));
