import { VERSIONS } from "@/constants/versions";
import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller({
	path: "users",
	version: VERSIONS.V1,
})
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	getHello(): string {
		return this.usersService.getHello();
	}
}
