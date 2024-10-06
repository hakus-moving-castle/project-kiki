import { neon } from "@neondatabase/serverless";
import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as usersSchema from "@users/users.schema";
import { DB_CONNECTION } from "./constants";
import { DrizzleService } from "./drizzle.service";

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
