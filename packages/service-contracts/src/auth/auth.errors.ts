import { HttpStatus } from "@nestjs/common";
import { RpcError } from "src/common";

export const AUTH_ERROR_CODES: Record<string, RpcError> = {
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
};
