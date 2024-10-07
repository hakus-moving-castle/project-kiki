import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

import { RpcExceptionFilter } from "@common/filters/rpc-exception.filter";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		AppModule,
		{
			transport: Transport.TCP,
			options: {
				port: 3001,
			},
		},
	);
	app.useGlobalFilters(new RpcExceptionFilter());
	app.useGlobalPipes(new ValidationPipe());
	await app.listen();
}

bootstrap();
