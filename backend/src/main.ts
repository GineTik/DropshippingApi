import { AllExceptionFilter } from '@app/exceptions/filters/exception-filter'
import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService)

	app.useLogger(Logger)
	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		credentials: true,
		origin: configService.getOrThrow('FRONTEND_URL')
	})
	app.useGlobalPipes(new ValidationPipe())
	app.useGlobalFilters(new AllExceptionFilter())

	await app.listen(configService.getOrThrow('PORT'))
}
bootstrap()
