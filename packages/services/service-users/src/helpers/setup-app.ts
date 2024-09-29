import { type INestApplication } from "@nestjs/common";
import cookieParser from "cookie-parser";

export const setupApp = (app: INestApplication) => {
	app.use(cookieParser());
};
