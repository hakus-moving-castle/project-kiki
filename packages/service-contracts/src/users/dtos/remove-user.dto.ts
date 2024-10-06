import { IsNotEmpty, IsNumber } from "class-validator";

export class RemoveUserDto {
	@IsNumber()
	@IsNotEmpty()
	id!: number;
}
