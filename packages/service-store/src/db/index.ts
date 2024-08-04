import { env } from '@config';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

const client = createClient({
  url: env.TURSO_DATABASE_URL!,
  authToken: env.TURSO_AUTH_TOKEN!,
});

const db = drizzle(client);

export default db;
