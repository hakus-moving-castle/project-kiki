import { env } from '@configs';
import { morganMiddleware } from '@repo/util-logger';
import { logger } from '@utils';
import { loadRoutes } from '@utils/routes.utils';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(morganMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

loadRoutes(app.use.bind(app), 'v1');

app.listen(env.PORT, () =>
  logger.info(`Server is listening on http://localhost:${env.PORT}...`),
);
