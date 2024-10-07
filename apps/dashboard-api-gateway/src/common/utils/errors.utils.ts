import { RpcError } from "@kiki/service-contracts";
import { RpcException } from "@nestjs/microservices";
import { catchError, throwError } from "rxjs";

export function catchRpcError() {
	return catchError((error: RpcError) =>
		throwError(() => new RpcException(error)),
	);
}
