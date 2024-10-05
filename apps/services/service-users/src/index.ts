import { users } from "@users/users.schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export namespace UsersService {
	export type InsertUser = InferInsertModel<typeof users>;
	export type SelectUser = InferSelectModel<typeof users>;
}
