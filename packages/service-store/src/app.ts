import { env } from '@config';
import { logger, morganMiddleware } from '@repo/util-logger';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(morganMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(env.PORT, () =>
  logger.info(`Server is listening on port ${env.PORT}!`),
);
