import { Router } from 'express';

const storesRouters = Router();

storesRouters.get('/', (req, res) => {
  res.send('Hello World!');
});

export default storesRouters;
