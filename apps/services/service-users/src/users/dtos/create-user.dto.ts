import { IsEmail, IsNotEmpty, IsString } from "class-validator";

import type { UserInsert } from "@users/users.schema";

export class CreateUserDto implements UserInsert {
	@IsEmail()
	@IsNotEmpty()
	email!: string;

	@IsString()
	@IsNotEmpty()
	password!: string;
}
