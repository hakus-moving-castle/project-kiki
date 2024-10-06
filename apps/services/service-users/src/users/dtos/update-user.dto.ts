import {
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from "class-validator";

import type { UserSelect } from "@users/users.schema";

export class UpdateUserDto implements Partial<UserSelect> {
	@IsNumber()
	@IsNotEmpty()
	id!: number;

	@IsEmail()
	@IsOptional()
	email!: string;

	@IsString()
	@IsOptional()
	password!: string;
}
