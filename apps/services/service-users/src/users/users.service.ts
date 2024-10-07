import { Injectable } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { eq } from "drizzle-orm";

import { DrizzleService } from "@database/drizzle.service";
import { RpcError } from "@kiki/service-contracts";
import { USERS_ERROR_CODES } from "@kiki/service-contracts/users";
import * as usersSchema from "./users.schema";
import type { UserInsert, UserSelect } from "./users.schema";

@Injectable()
export class UsersService {
	constructor(
		private readonly drizzleService: DrizzleService<typeof usersSchema>,
	) {}

	async create(user: UserInsert): Promise<UserSelect> {
		const userExist = await this.existByEmail(user.email);
		if (userExist) {
			throw new RpcException({
				...USERS_ERROR_CODES.USER_ALREADY_EXISTS,
			} as RpcError);
		}

		const newUser = (
			await this.drizzleService.db
				.insert(usersSchema.users)
				.values(user)
				.returning()
		)[0];

		return newUser as UserSelect;
	}

	async findAll(): Promise<UserSelect[]> {
		const users = await this.drizzleService.db.select().from(usersSchema.users);
		return users;
	}

	async findOne(id: UserSelect["id"]): Promise<UserSelect> {
		const user = (
			await this.drizzleService.db
				.select()
				.from(usersSchema.users)
				.where(eq(usersSchema.users.id, id))
		)[0];

		if (!user) {
			throw new RpcException({
				...USERS_ERROR_CODES.USER_NOT_FOUND,
			} as RpcError);
		}

		return user as UserSelect;
	}

	async update(
		id: UserSelect["id"],
		user: Partial<UserInsert>,
	): Promise<UserSelect> {
		const updatedUser = (
			await this.drizzleService.db
				.update(usersSchema.users)
				.set(user)
				.where(eq(usersSchema.users.id, id))
				.returning()
		)[0];

		return updatedUser as UserSelect;
	}

	async remove(id: UserSelect["id"]): Promise<UserSelect> {
		const removedUser = (
			await this.drizzleService.db
				.delete(usersSchema.users)
				.where(eq(usersSchema.users.id, id))
				.returning()
		)[0];

		return removedUser as UserSelect;
	}

	async existByEmail(email: UserSelect["email"]): Promise<boolean> {
		const user = (
			await this.drizzleService.db
				.select()
				.from(usersSchema.users)
				.where(eq(usersSchema.users.email, email))
		)[0];

		return !!user;
	}
}
