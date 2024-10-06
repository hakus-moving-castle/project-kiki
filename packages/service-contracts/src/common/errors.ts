import { HttpStatus } from "@nestjs/common";

export type RpcError = {
	code: string;
	message: string;
	httpStatus?: HttpStatus;
	data?: Record<string, unknown>;
};

export const COMMON_ERROR_CODES = {
	INTERNAL_SERVER_ERROR: {
		code: "INTERNAL_SERVER_ERROR",
		message: "Internal server error",
		httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
	},
	UNAUTHORIZED: {
		code: "UNAUTHORIZED",
		message: "Unauthorized access",
		httpStatus: HttpStatus.UNAUTHORIZED,
	},
	FORBIDDEN: {
		code: "FORBIDDEN",
		message: "Forbidden",
		httpStatus: HttpStatus.FORBIDDEN,
	},
	NOT_FOUND: {
		code: "NOT_FOUND",
		message: "Not found",
		httpStatus: HttpStatus.NOT_FOUND,
	},
	BAD_REQUEST: {
		code: "BAD_REQUEST",
		message: "Bad request",
		httpStatus: HttpStatus.BAD_REQUEST,
	},
	CONFLICT: {
		code: "CONFLICT",
		message: "Conflict",
		httpStatus: HttpStatus.CONFLICT,
	},
	SERVICE_UNAVAILABLE: {
		code: "SERVICE_UNAVAILABLE",
		message: "Service unavailable",
		httpStatus: HttpStatus.SERVICE_UNAVAILABLE,
	},
	TIMEOUT: {
		code: "TIMEOUT",
		message: "Request timeout",
		httpStatus: HttpStatus.REQUEST_TIMEOUT,
	},
	TOO_MANY_REQUESTS: {
		code: "TOO_MANY_REQUESTS",
		message: "Too many requests",
		httpStatus: HttpStatus.TOO_MANY_REQUESTS,
	},
} satisfies Record<string, RpcError>;
