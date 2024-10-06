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
import { CreateUserDto } from "./dtos/create-users.dto";
import { UpdateUserDto } from "./dtos/update-users.dto";
import { UsersService } from "./users.service";

@Controller({
	path: "users",
	version: VERSIONS.V1,
})
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	async create(@Body() body: CreateUserDto) {
		const user = this.usersService.create(body);
		return user;
	}

	@Get()
	findMany() {
		const users = this.usersService.findMany();
		return users;
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		const user = this.usersService.findOne(id);
		return user;
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() body: UpdateUserDto) {
		const user = this.usersService.update(id, body);
		return user;
	}

	@Delete(":id")
	delete(@Param("id") id: string) {
		const user = this.usersService.delete(id);
		return user;
	}
}
