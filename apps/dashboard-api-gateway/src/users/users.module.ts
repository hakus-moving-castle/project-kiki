import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { USERS_CLIENT } from "./constants";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
	imports: [
		ClientsModule.register([
			{
				name: USERS_CLIENT,
				transport: Transport.TCP,
				options: {
					port: 3001,
				},
			},
		]),
	],
	controllers: [UsersController],
	providers: [UsersService],
})
export class UsersModule {}
