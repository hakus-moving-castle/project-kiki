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

	async create(user: UserInsert): Promise<UserSelect> {
		const newUser = await this.drizzleService.db
			.insert(usersSchema.users)
			.values(user)
			.returning();
		// @ts-expect-error throw error if user is not found
		return newUser[0];
	}

	async findAll(): Promise<UserSelect[]> {
		const users = await this.drizzleService.db.select().from(usersSchema.users);
		return users;
	}

	async findById(id: UserSelect["id"]): Promise<UserSelect> {
		const user = await this.drizzleService.db
			.select()
			.from(usersSchema.users)
			.where(eq(usersSchema.users.id, id));
		// @ts-expect-error throw error if user is not found
		return user[0];
	}

	async findByEmail(email: UserSelect["email"]): Promise<UserSelect> {
		const { password, ...rest } = getTableColumns(usersSchema.users);
		const user = await this.drizzleService.db
			.select({ ...rest })
			.from(usersSchema.users)
			.where(eq(usersSchema.users.email, email));
		// @ts-expect-error throw error if user is not found
		return user[0];
	}

	async update(
		id: UserSelect["id"],
		user: Partial<UserInsert>,
	): Promise<UserSelect> {
		const updatedUser = await this.drizzleService.db
			.update(usersSchema.users)
			.set(user)
			.where(eq(usersSchema.users.id, id))
			.returning();
		// @ts-expect-error throw error if user is not found
		return updatedUser[0];
	}

	async remove(id: UserSelect["id"]): Promise<UserSelect> {
		const removedUser = await this.drizzleService.db
			.delete(usersSchema.users)
			.where(eq(usersSchema.users.id, id))
			.returning();
		// @ts-expect-error throw error if user is not found
		return removedUser[0];
	}
}
