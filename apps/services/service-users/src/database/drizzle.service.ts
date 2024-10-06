import { Inject, Injectable } from "@nestjs/common";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";

import { DB_CONNECTION } from "./constants";

@Injectable()
export class DrizzleService<Schema extends Record<string, unknown>> {
	constructor(@Inject(DB_CONNECTION) readonly db: NeonDatabase<Schema>) {}
}
