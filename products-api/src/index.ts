import 'dotenv/config';

import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import ProductRouter from './routes/products.routes';

const { PORT = 3000 } = process.env;

(() => {
  
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
  app.use('/', ProductRouter);

  app.listen(PORT, () => console.log(`Products service started at port: ${PORT} 🚀🚀`));
})();
