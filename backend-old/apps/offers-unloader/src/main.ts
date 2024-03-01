import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { OffersUnloaderModule } from './offers-unloader.module'

async function bootstrap() {
	const app = await NestFactory.create(OffersUnloaderModule)
	const configService = app.get(ConfigService)
	await app.listen(configService.get('PORT'), '0.0.0.0')
}
bootstrap()
