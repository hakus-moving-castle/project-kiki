import { INestApplication, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

export function setupApp(app: INestApplication) {
	app.enableVersioning({
		type: VersioningType.URI,
		prefix: false,
	});
}

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	setupApp(app);
	await app.listen(3000);
}

bootstrap();
