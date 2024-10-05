import { Injectable } from "@nestjs/common";
import { eq, getTableColumns } from "drizzle-orm";

import { DrizzleService } from "@database/drizzle.service";
import * as usersSchema from "./users.schema";
import type { UserInsert, UserSelect } from "./users.schema";

@Injectable()
export class UsersService {
	constructor(
		private readonly drizzleService: DrizzleService<typeof usersSchema>,
	) {}

	async getUsers() {
		const { password, ...rest } = getTableColumns(usersSchema.users);
		const users = await this.drizzleService.db
			.select({ ...rest })
			.from(usersSchema.users);
		return users;
	}

	async getUserById(id: UserSelect["id"]) {
		const { password, ...rest } = getTableColumns(usersSchema.users);
		const user = await this.drizzleService.db
			.select({ ...rest })
			.from(usersSchema.users)
			.where(eq(usersSchema.users.id, id));
		return user;
	}

	async getUserByEmail(email: UserSelect["email"]) {
		const { password, ...rest } = getTableColumns(usersSchema.users);
		const user = await this.drizzleService.db
			.select({ ...rest })
			.from(usersSchema.users)
			.where(eq(usersSchema.users.email, email));
		return user;
	}

	async getUserWithPasswordByEmail(email: UserSelect["email"]) {
		const { ...rest } = getTableColumns(usersSchema.users);
		const user = this.drizzleService.db
			.select({ ...rest })
			.from(usersSchema.users)
			.where(eq(usersSchema.users.email, email));
		return user;
	}

	async createUser(user: UserInsert) {
		const { password, ...rest } = getTableColumns(usersSchema.users);
		const newUser = await this.drizzleService.db
			.insert(usersSchema.users)
			.values(user)
			.returning({ ...rest });
		return newUser;
	}

	async updateUser(id: UserSelect["id"], user: Partial<UserSelect>) {
		const { password, ...rest } = getTableColumns(usersSchema.users);
		const updatedUser = await this.drizzleService.db
			.update(usersSchema.users)
			.set(user)
			.where(eq(usersSchema.users.id, id))
			.returning({ ...rest });
		return updatedUser;
	}

	async deleteUser(id: UserSelect["id"]) {
		const { password, ...rest } = getTableColumns(usersSchema.users);
		const deletedUser = await this.drizzleService.db
			.delete(usersSchema.users)
			.where(eq(usersSchema.users.id, id))
			.returning({ ...rest });
		return deletedUser;
	}
}
