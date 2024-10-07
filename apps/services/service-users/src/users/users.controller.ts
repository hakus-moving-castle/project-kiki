import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

import { VERSIONS } from "@kiki/service-contracts";
import {
	CreateUserDto,
	type FindOneUserDto,
	RemoveUserDto,
	USERS_PATTERNS,
	UpdateUserDto,
} from "@kiki/service-contracts/users";
import { UsersService } from "./users.service";

@Controller({
	path: "users",
	version: VERSIONS.V1,
})
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@MessagePattern(USERS_PATTERNS.CREATE)
	async create(@Payload() dto: CreateUserDto) {
		const created = await this.usersService.create(dto);
		return created;
	}

	@MessagePattern(USERS_PATTERNS.FIND_ALL)
	async findAll() {
		const users = await this.usersService.findAll();
		return users;
	}

	@MessagePattern(USERS_PATTERNS.FIND_ONE)
	async findOne(@Payload() dto: FindOneUserDto) {
		const { id } = dto;
		const user = await this.usersService.findOne(id);
		return user;
	}

	@MessagePattern(USERS_PATTERNS.UPDATE)
	async update(@Payload() dto: UpdateUserDto) {
		const { id, ...data } = dto;
		const updated = await this.usersService.update(id, data);
		return updated;
	}

	@MessagePattern(USERS_PATTERNS.REMOVE)
	async remove(@Payload() dto: RemoveUserDto) {
		const { id } = dto;
		const removed = await this.usersService.remove(id);
		return removed;
	}
}
