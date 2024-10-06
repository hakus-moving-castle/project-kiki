import { Controller } from "@nestjs/common";

import { VERSIONS } from "@kiki/service-common/constants";

@Controller({
	path: "users",
	version: VERSIONS.V1,
})
export class UsersController {}
