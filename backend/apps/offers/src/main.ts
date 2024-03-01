import { OFFERS, defaultStartMicroservice } from '@app/microservices'
import { RabbitMqService } from '@app/microservices/rabbitmq.service'
import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions } from '@nestjs/microservices'
import { OffersModule } from './offers.module'

async function bootstrap() {
	const app = await NestFactory.create(OffersModule)

	const configService = app.get(ConfigService)
	const rmqService = app.get(RabbitMqService)
	console.log(configService.getOrThrow('PORT'))

	app.useLogger(Logger)
	app.enableCors()

	app.connectMicroservice<MicroserviceOptions>(rmqService.getOptions(OFFERS))

	await defaultStartMicroservice(app)
}
bootstrap()
