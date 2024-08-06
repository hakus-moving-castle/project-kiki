import { __dirname } from '@utils';
import type { Application } from 'express';
import fs from 'fs';
import path from 'path';

export const loadRoutes = (use: Application['use'], version: string) => {
  const routesPath = path.join(__dirname, '../routes', version);
  fs.readdirSync(routesPath).forEach(async (file) => {
    const route = await import(path.join(routesPath, file));
    const routeName = file.split('.')[0];
    use(`/api/${version}/${routeName}`, route.default);
  });
};
