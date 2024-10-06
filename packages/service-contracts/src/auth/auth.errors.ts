import { HttpStatus } from "@nestjs/common";
import { RpcError } from "../common/errors";

export const AUTH_ERROR_CODES = {
	INVALID_AUTH_TOKEN: {
		code: "INVALID_AUTH_TOKEN",
		message: "Invalid authentication token",
		httpStatus: HttpStatus.UNAUTHORIZED,
	},
	AUTH_TOKEN_EXPIRED: {
		code: "AUTH_TOKEN_EXPIRED",
		message: "Authentication token has expired",
		httpStatus: HttpStatus.UNAUTHORIZED,
	},
	USER_PASSWORD_TOO_WEAK: {
		code: "USER_PASSWORD_TOO_WEAK",
		message: "User password is too weak",
		httpStatus: HttpStatus.BAD_REQUEST,
	},
} satisfies Record<string, RpcError>;
