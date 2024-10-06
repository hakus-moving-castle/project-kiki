import {
	CallHandler,
	ExecutionContext,
	NestInterceptor,
	UseInterceptors,
} from "@nestjs/common";
import { ClassConstructor, plainToClass } from "class-transformer";
import { Observable, map } from "rxjs";

// Serialize decorator
export function Serialize<T>(dto: ClassConstructor<T>) {
	return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor<T> implements NestInterceptor {
	constructor(private dto: ClassConstructor<T>) {}

	intercept(
		_: ExecutionContext,
		next: CallHandler<T>,
	): Observable<T> | Promise<Observable<T>> {
		return next.handle().pipe(
			map((data) => {
				return plainToClass(this.dto, data, {
					excludeExtraneousValues: true,
				});
			}),
		);
	}
}
