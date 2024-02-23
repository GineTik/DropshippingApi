import {
	connectToRabbitMqMicroservice,
	defaultStartMicroservice
} from '@app/microservices'
import { NestFactory } from '@nestjs/core'
import { OffersUnloaderModule } from './offers-unloader.module'

async function bootstrap() {
	const app = await NestFactory.create(OffersUnloaderModule)

	connectToRabbitMqMicroservice(app, 'goods-unloader')
	defaultStartMicroservice(app)
}
bootstrap()
