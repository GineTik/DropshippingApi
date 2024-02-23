import { connectToRabbitMqMicroservice } from '@app/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { GoodsModule } from './goods.module';

async function bootstrap() {
  const app = await NestFactory.create(GoodsModule)
  const configService = app.get(ConfigService)
  
  app.useLogger(Logger)
  app.enableCors()
  
  connectToRabbitMqMicroservice(app, 'goods')

  app.startAllMicroservices();
  app.listen(configService.get('PORT'), '0.0.0.0');
}
bootstrap();
