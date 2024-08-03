import { z } from 'zod';

export const isDev = process.env.NODE_ENV === 'development';

export const SERVICE = 'STORE';

const envSchema = z
  .object({
    PORT: z.string().default('3000'),
    NODE_ENV: z.string().default('development'),

    [`${SERVICE}_TURSO_DATABASE_URL`]: z.string(),
    [`${SERVICE}_TURSO_AUTH_TOKEN`]: z.string(),
  })
  .transform((data) => ({
    ...data,
    TURSO_DATABASE_URL: data[`${SERVICE}_TURSO_DATABASE_URL`],
    TURSO_AUTH_TOKEN: data[`${SERVICE}_TURSO_AUTH_TOKEN`],
  }));

const env = envSchema.parse(process.env);

export default env;
