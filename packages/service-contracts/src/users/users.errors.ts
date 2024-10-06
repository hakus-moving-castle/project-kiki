import { HttpStatus } from "@nestjs/common";
import { RpcError } from "../common/errors";

export const USERS_ERROR_CODES = {
	USER_ALREADY_EXISTS: {
		code: "USER_ALREADY_EXISTS",
		message: "User already exists",
		httpStatus: HttpStatus.CONFLICT,
	},
	USER_NOT_FOUND: {
		code: "USER_NOT_FOUND",
		message: "User not found",
		httpStatus: HttpStatus.NOT_FOUND,
	},
	INVALID_USER_CREDENTIALS: {
		code: "INVALID_USER_CREDENTIALS",
		message: "Invalid user credentials",
		httpStatus: HttpStatus.UNAUTHORIZED,
	},
	USER_ACCOUNT_LOCKED: {
		code: "USER_ACCOUNT_LOCKED",
		message: "User account is locked",
		httpStatus: HttpStatus.FORBIDDEN,
	},
	USER_ACCOUNT_DISABLED: {
		code: "USER_ACCOUNT_DISABLED",
		message: "User account is disabled",
		httpStatus: HttpStatus.FORBIDDEN,
	},
	USER_EMAIL_NOT_VERIFIED: {
		code: "USER_EMAIL_NOT_VERIFIED",
		message: "User email is not verified",
		httpStatus: HttpStatus.FORBIDDEN,
	},
	USER_FORBIDDEN: {
		code: "USER_FORBIDDEN",
		message: "User does not have permission to perform this action",
		httpStatus: HttpStatus.FORBIDDEN,
	},
} satisfies Record<string, RpcError>;
