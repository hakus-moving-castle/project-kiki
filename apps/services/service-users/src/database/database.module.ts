import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { DB_CONNECTION, DrizzleService } from "./drizzle.service";

import * as usersSchema from "@users/users.schema";

@Module({
	providers: [
		DrizzleService,
		{
			provide: DB_CONNECTION,
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => {
				const sql = neon(configService.getOrThrow("DATABASE_URL"));
				return drizzle(sql, { schema: { ...usersSchema } });
			},
		},
	],
	exports: [DrizzleService],
})
export class DatabaseModule {}
