import {
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
} from "class-validator";

export class UpdateUserDto {
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
