import { connectToRabbitMqMicroservice } from '@app/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  
  app.useLogger(Logger)
  app.setGlobalPrefix('api')
  app.use(cookieParser())
  app.enableCors({
    credentials: true,
    origin: configService.getOrThrow('FRONTEND_URL'),
  })
  
  connectToRabbitMqMicroservice(app, 'account')

  app.startAllMicroservices();
  app.listen(configService.getOrThrow('PORT'), '0.0.0.0');
}
bootstrap();