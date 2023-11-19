import * as express from 'express';
import {v1} from './api/main';
import {cliDisp} from './cli';
//onst chalk = chalk();

const vxserver = express();
const port:number = 3000;

vxserver.use(express.json());

vxserver.use('/v1', v1);

vxserver.get('/', (req, res) => {
  res.send('vx server');
});

vxserver.listen(port, () => {
  const cli = cliDisp();
  console.log(cli);
});
