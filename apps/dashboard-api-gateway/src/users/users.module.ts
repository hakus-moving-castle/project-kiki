import { Module } from "@nestjs/common";
import { ClientProxyFactory } from "@nestjs/microservices";

import { ClientConfigModule } from "@client-config/client-config.module";
import { ClientConfigService } from "@client-config/client-config.service";
import { USERS_CLIENT } from "./constants";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
	imports: [ClientConfigModule],
	controllers: [UsersController],
	providers: [
		UsersService,
		{
			provide: USERS_CLIENT,
			useFactory: (clientConfigService: ClientConfigService) => {
				const clientOptions = clientConfigService.usersClientOptions;
				return ClientProxyFactory.create(clientOptions);
			},
			inject: [ClientConfigService],
		},
	],
})
export class UsersModule {}
