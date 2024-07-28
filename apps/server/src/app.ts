import { logger, morganMiddleware } from '@repo/logger';
import express from 'express';

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(morganMiddleware);

app.listen(PORT, () => logger.info(`Server is listening on ${PORT} ...`));
