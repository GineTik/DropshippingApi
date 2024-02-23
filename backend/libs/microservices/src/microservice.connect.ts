import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

export const connectToRabbitMqMicroservice = (app: INestApplication<any>, queue: string) => {
    const configService = app.get(ConfigService)

    const USER = configService.getOrThrow('RABBITMQ_DEFAULT_USER')
    const PASSWORD = configService.getOrThrow('RABBITMQ_DEFAULT_PASS')
    const HOST = configService.getOrThrow('RABBITMQ_HOST')
    
    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
        queue,
      }
    })
}