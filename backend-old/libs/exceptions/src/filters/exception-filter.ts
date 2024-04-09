import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException
} from '@nestjs/common'
import { Response } from 'express'

@Catch(Error)
export class AllExceptionFilter implements ExceptionFilter {
	catch(exception: Error, host: ArgumentsHost) {
		if (exception as HttpException) {
			const httpException = exception as HttpException
			const ctx = host.switchToHttp()
			const response = ctx.getResponse<Response>()
			const request = ctx.getRequest<Request>()
			const status = httpException.getStatus()

			response.status(status).json({
				statusCode: status,
				message: httpException.message,
				timestamp: new Date().toISOString(),
				path: request.url
			})
		} else {
			console.log(exception)
		}
	}
}
