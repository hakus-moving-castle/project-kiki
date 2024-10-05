import { IsEmail, IsOptional, IsString } from "class-validator";

import type { UserSelect } from "@users/users.schema";

export class UpdateUserDto implements Partial<UserSelect> {
	@IsEmail()
	@IsOptional()
	email!: string;

	@IsString()
	@IsOptional()
	password!: string;
}
