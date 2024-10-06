import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from "@nestjs/common";

import { Serialize } from "@common/interceptors/serialize.interceptor";
import { VERSIONS } from "@kiki/service-common/constants";
import { CreateUserDto } from "./dtos/create-users.dto";
import { UpdateUserDto } from "./dtos/update-users.dto";
import { UserDto } from "./dtos/user.dto";
import { UsersService } from "./users.service";

@Controller({
	path: "users",
	version: VERSIONS.V1,
})
@Serialize(UserDto)
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	async create(@Body() body: CreateUserDto) {
		const user = this.usersService.create(body);
		return user;
	}

	@Get()
	findAll() {
		const users = this.usersService.findAll();
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
	remove(@Param("id") id: string) {
		const user = this.usersService.remove(id);
		return user;
	}
}
