import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import Joi from "joi";

import { ClientConfigService } from "./client-config.service";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: false,
			validationSchema: Joi.object({
				USERS_CLIENT_PORT: Joi.number().default(3001),
			}),
		}),
	],
	providers: [ClientConfigService],
	exports: [ClientConfigService],
})
export class ClientConfigModule {}
