import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientOptions, Transport } from "@nestjs/microservices";

export class ClientConfigService {
	constructor(private configService: ConfigService) {}

	get usersClientOptions(): ClientOptions {
		return {
			transport: Transport.TCP,
			options: {
				port: this.getUsersClientPort(),
			},
		};
	}

	private getUsersClientPort(): number {
		const port = this.configService.get<number>("USERS_CLIENT_PORT") as number;
		return port;
	}
}
