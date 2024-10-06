import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

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

	@MessagePattern("users.create")
	async create(@Payload() createUserDto: CreateUserDto) {
		const user = await this.usersService.createUser(createUserDto);
		return user;
	}

	@MessagePattern("users.findMany")
	async findMany() {
		const users = await this.usersService.findUsers();
		return users;
	}

	@MessagePattern("users.findOne")
	async findOne(@Payload() id: number) {
		const user = await this.usersService.findUserById(id);
		return user;
	}

	@MessagePattern("users.update")
	async update(@Payload() updateUserDto: UpdateUserDto) {
		const { id, ...update } = updateUserDto;
		const user = await this.usersService.updateUser(id, update);
		return user;
	}

	@MessagePattern("users.delete")
	async delete(@Payload() id: number) {
		const user = await this.usersService.deleteUser(id);
		return user;
	}
}
