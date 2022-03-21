import 'dotenv/config';

import express, { NextFunction } from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import ExtractRouter from './routes/extract.routes';

const { PORT = 3000 } = process.env;

(async () => {
  const app = express();

  /* DEFINING MIDDLEWARE */

  app.use(cors());
  app.use(
    logger('dev', {
      skip() {
        return process.env.APP_ENV === 'dev';
      },
    }),
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  /* DEFINING ROUTES */
  app.use('/', ExtractRouter);

  app.listen(PORT, () => console.log(`Extracts service started at port: ${PORT} 🚀🚀`));
})();
