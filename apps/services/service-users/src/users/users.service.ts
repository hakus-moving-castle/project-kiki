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

	async createUser(user: UserInsert): Promise<UserInsert> {
		const newUser = await this.drizzleService.db
			.insert(usersSchema.users)
			.values(user)
			.returning();
		// @ts-expect-error throw error if user is not found
		return newUser[0];
	}

	async findUsers(): Promise<UserSelect[]> {
		const users = await this.drizzleService.db.select().from(usersSchema.users);
		return users;
	}

	async findUserById(id: UserSelect["id"]): Promise<UserSelect> {
		const user = await this.drizzleService.db
			.select()
			.from(usersSchema.users)
			.where(eq(usersSchema.users.id, id));
		// @ts-expect-error throw error if user is not found
		return user[0];
	}

	async findUserByEmail(email: UserSelect["email"]): Promise<UserSelect> {
		const { password, ...rest } = getTableColumns(usersSchema.users);
		const user = await this.drizzleService.db
			.select({ ...rest })
			.from(usersSchema.users)
			.where(eq(usersSchema.users.email, email));
		// @ts-expect-error throw error if user is not found
		return user[0];
	}

	async updateUser(
		id: UserSelect["id"],
		user: Partial<UserSelect>,
	): Promise<UserSelect> {
		const updatedUser = await this.drizzleService.db
			.update(usersSchema.users)
			.set(user)
			.where(eq(usersSchema.users.id, id))
			.returning();
		// @ts-expect-error throw error if user is not found
		return updatedUser[0];
	}

	async deleteUser(id: UserSelect["id"]): Promise<UserSelect> {
		const deletedUser = await this.drizzleService.db
			.delete(usersSchema.users)
			.where(eq(usersSchema.users.id, id))
			.returning();
		// @ts-expect-error throw error if user is not found
		return deletedUser[0];
	}
}
