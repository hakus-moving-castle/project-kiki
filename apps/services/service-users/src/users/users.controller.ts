import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from "@nestjs/common";

import { VERSIONS } from "@common/constants/versions";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UsersService } from "./users.service";

@Controller({
	path: "users",
	version: VERSIONS.V1,
})
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	async getUsers() {
		const users = await this.usersService.getUsers();
		return users;
	}

	@Get(":id")
	async getUser(@Param("id") id: string) {
		const user = await this.usersService.getUserById(Number.parseInt(id));
		return user;
	}

	@Post()
	async createUser(@Body() body: CreateUserDto) {
		const user = await this.usersService.createUser(body);
		return user;
	}

	@Patch(":id")
	async updateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
		const user = await this.usersService.updateUser(Number.parseInt(id), body);
		return user;
	}

	@Delete(":id")
	async deleteUser(@Param("id") id: string) {
		const user = await this.usersService.deleteUser(Number.parseInt(id));
		return user;
	}
}
