import { INestApplication, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import cookieParser from "cookie-parser";
import { AppModule } from "./app.module";

export const setupApp = (app: INestApplication) => {
	app.use(cookieParser());
	app.enableVersioning({
		type: VersioningType.URI,
		prefix: false,
	});
};

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	setupApp(app);
	await app.listen(3000);
}
bootstrap();
