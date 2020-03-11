import { Request, Response } from 'express';

import routerBase from 'express-promise-router';
const router = routerBase();

//import { searchDepartmentName,searchSimilarAddress } from '../ldap/search_ldap';
import { DBSearch } from '../db/search_mongodb';
import { SHA256 } from 'crypto-js';
import { Logger } from '../logger/ld_logger';

router.post('/', async (req: Request, res: Response) => {
  const { names, values } = req.body;


  //out put log
  let logkey = SHA256(names.from);
  Logger.infolog('[executedby:::]from:' + logkey);

  res.send("somethig_message");
});

export = router;
