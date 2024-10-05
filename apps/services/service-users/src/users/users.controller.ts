import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from "@nestjs/common";

import { VERSIONS } from "@kiki/service-common/constants";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UsersService } from "./users.service";

@Controller({
	path: "users",
	version: VERSIONS.V1,
})
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	async create(@Body() body: CreateUserDto) {
		const user = await this.usersService.createUser(body);
		return user;
	}

	@Get()
	async findMany() {
		const users = await this.usersService.findUsers();
		return users;
	}

	@Get(":id")
	async findOne(@Param("id") id: string) {
		const user = await this.usersService.findUserById(Number.parseInt(id));
		return user;
	}

	@Patch(":id")
	async update(@Param("id") id: string, @Body() body: UpdateUserDto) {
		const user = await this.usersService.updateUser(Number.parseInt(id), body);
		return user;
	}

	@Delete(":id")
	async delete(@Param("id") id: string) {
		const user = await this.usersService.deleteUser(Number.parseInt(id));
		return user;
	}
}
