import { Get, Injectable } from "@nestjs/common";
import { getTableColumns } from "drizzle-orm";

import { DrizzleService } from "@database/drizzle.service";
import * as usersSchema from "./users.schema";

@Injectable()
export class UsersService {
	constructor(
		private readonly drizzleService: DrizzleService<typeof usersSchema>,
	) {}

	@Get()
	getUsers() {
		const { password, ...rest } = getTableColumns(usersSchema.users);
		return this.drizzleService.db.select({ ...rest }).from(usersSchema.users);
	}
}
