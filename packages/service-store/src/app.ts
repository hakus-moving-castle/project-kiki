import { logger, morganMiddleware } from '@repo/logger';
import bodyParser from 'body-parser';
import express from 'express';

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(morganMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => logger.info(`Server is listening on ${PORT} ...`));
