import { z } from 'zod';

export const SERVICE = 'STORE';

const envSchema = z.object({
  PORT: z.string().default('3000'),
  NODE_ENV: z.string().default('development'),
});

const env = envSchema.parse(process.env);

export default env;
