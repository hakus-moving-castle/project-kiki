import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

import { CreateUserDto } from "./dtos/create-users.dto";
import { UpdateUserDto } from "./dtos/update-users.dto";

@Injectable()
export class UsersService {
	constructor(
		@Inject("USERS_CLIENT") private readonly usersClient: ClientProxy,
	) {}

	create(user: CreateUserDto) {
		return this.usersClient.send("users.create", user);
	}

	findMany() {
		return this.usersClient.send("users.findMany", {});
	}

	findOne(id: string) {
		return this.usersClient.send("users.findOne", Number.parseInt(id));
	}

	update(id: string, user: UpdateUserDto) {
		return this.usersClient.send("users.update", {
			id: Number.parseInt(id),
			...user,
		});
	}

	delete(id: string) {
		return this.usersClient.send("users.delete", Number.parseInt(id));
	}
}
