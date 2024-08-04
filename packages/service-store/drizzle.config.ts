import { env } from '@config';
import type { Config } from 'drizzle-kit';

export default {
  dialect: 'sqlite',
  schema: './src/db/schema/**/*.ts',
  out: './src/db/migrations',
  driver: 'turso',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
} satisfies Config;
