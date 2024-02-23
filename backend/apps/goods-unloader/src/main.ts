import {
	connectToRabbitMqMicroservice,
	defaultStartMicroservice
} from '@app/microservices'
import { NestFactory } from '@nestjs/core'
import { GoodsUnloaderModule } from './goods-unloader.module'

async function bootstrap() {
	const app = await NestFactory.create(GoodsUnloaderModule)

	connectToRabbitMqMicroservice(app, 'goods')
	defaultStartMicroservice(app)
}
bootstrap()
