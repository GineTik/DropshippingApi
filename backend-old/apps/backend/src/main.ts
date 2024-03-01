import { ACCOUNT, defaultStartMicroservice } from '@app/microservices'
import { RabbitMqService } from '@app/microservices/rabbitmq.service'
import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import * as cookieParser from 'cookie-parser'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService)
	const rmqService = app.get(RabbitMqService)

	app.useLogger(Logger)
	app.setGlobalPrefix('api')
	app.use(cookieParser())
	app.enableCors({
		credentials: true,
		origin: configService.getOrThrow('FRONTEND_URL')
	})

	app.connectMicroservice<MicroserviceOptions>(rmqService.getOptions(ACCOUNT))
	await defaultStartMicroservice(app)
}
bootstrap()
