import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import {
	CreateUserDto as ClientCreateUserDto,
	FindAllUsersDto as ClientFindAllUsersDto,
	FindOneUserDto as ClientFindOneUserDto,
	RemoveUserDto as ClientRemoveUserDto,
	UpdateUserDto as ClientUpdateUserDto,
	UserDto as ClientUserDto,
	USERS_PATTERNS,
} from "@kiki/service-contracts";

import { CreateUserDto } from "./dtos/create-users.dto";
import { UpdateUserDto } from "./dtos/update-users.dto";

@Injectable()
export class UsersService {
	constructor(
		@Inject("USERS_CLIENT") private readonly usersClient: ClientProxy,
	) {}

	create(user: CreateUserDto) {
		return this.usersClient.send<ClientUserDto, ClientCreateUserDto>(
			USERS_PATTERNS.CREATE,
			user,
		);
	}

	findAll() {
		return this.usersClient.send<ClientUserDto, ClientFindAllUsersDto>(
			USERS_PATTERNS.FIND_ALL,
			{},
		);
	}

	findOne(id: string) {
		return this.usersClient.send<ClientUserDto, ClientFindOneUserDto>(
			USERS_PATTERNS.FIND_ONE,
			{
				id: Number.parseInt(id),
			},
		);
	}

	update(id: string, user: UpdateUserDto) {
		return this.usersClient.send<ClientUserDto, ClientUpdateUserDto>(
			USERS_PATTERNS.UPDATE,
			{
				id: Number.parseInt(id),
				...user,
			},
		);
	}

	remove(id: string) {
		return this.usersClient.send<ClientUserDto, ClientRemoveUserDto>(
			USERS_PATTERNS.REMOVE,
			{
				id: Number.parseInt(id),
			},
		);
	}
}
