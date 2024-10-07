import {
	ArgumentsHost,
	RpcExceptionFilter as BaseRpcExceptionFilter,
	Catch,
} from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { Observable, throwError } from "rxjs";

import { RpcError } from "@kiki/service-contracts";

@Catch(RpcException)
export class RpcExceptionFilter
	implements BaseRpcExceptionFilter<RpcException>
{
	catch(exception: RpcException, _: ArgumentsHost): Observable<RpcError> {
		return throwError(() => exception.getError());
	}
}
