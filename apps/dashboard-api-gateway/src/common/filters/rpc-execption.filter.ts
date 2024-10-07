import {
	ArgumentsHost,
	Catch,
	RpcExceptionFilter as ExceptionFilter,
	HttpStatus,
} from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { Response } from "express";
import { Observable, throwError } from "rxjs";

import { RpcError } from "@kiki/service-contracts";

@Catch(RpcException)
export class RpcExceptionFilter implements ExceptionFilter<RpcException> {
	catch(exception: RpcException, host: ArgumentsHost): Observable<RpcError> {
		const ctx = host.switchToHttp();
		const error = exception.getError() as RpcError;
		const response = ctx.getResponse<Response>();
		const status = error.httpStatus || HttpStatus.INTERNAL_SERVER_ERROR;

		response.status(status).json(error);
		return throwError(() => error);
	}
}
