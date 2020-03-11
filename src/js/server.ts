import { Request, Response, NextFunction } from 'express';
import express from 'express';
var app = express();
import * as bodyParser from 'body-parser';
import chkLogicRouter from './router/chk_logic_router';
import { Logger } from './logger/ld_logger';
import { connectDB } from './db/connect_mongoose';

const port: number = 3000;

app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
  Logger.error(err.stack);
  res.status(500).send({ error: 'Something is broken!' });
  next(err);
});

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/api/server', chkLogicRouter);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('healthy');
  next();
});

app.listen(port, async () => {
  Logger.initialize();
  await connectDB();
  //console.log(`listening on port ${port}`);
  Logger.infolog(`listening on port ${port}`);
});
