import { type INestApplication, VersioningType } from "@nestjs/common";
import cookieParser from "cookie-parser";

export const setupApp = (app: INestApplication) => {
	app.use(cookieParser());

	app.enableVersioning({
		type: VersioningType.URI,
		prefix: false,
	});
};
