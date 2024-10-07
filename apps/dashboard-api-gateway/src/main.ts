import {
	INestApplication,
	ValidationPipe,
	VersioningType,
} from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";

import { RpcExceptionFilter } from "@common/filters/rpc-execption.filter";
import { AppModule } from "./app.module";

export function setupApp(app: INestApplication) {
	app.use(cookieParser());
	app.enableVersioning({
		type: VersioningType.URI,
		prefix: false,
	});
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalFilters(new RpcExceptionFilter());
}

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	setupApp(app);
	await app.listen(3000);
}

bootstrap();
