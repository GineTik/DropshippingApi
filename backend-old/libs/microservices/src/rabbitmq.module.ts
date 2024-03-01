import { DynamicModule, Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { RabbitMqService } from './rabbitmq.service'

@Module({
	providers: [RabbitMqService],
	exports: [RabbitMqService]
})
export class RabbitMqModule {
	static register({ name }: { name: string }): DynamicModule {
		return {
			module: RabbitMqModule,
			imports: [
				ClientsModule.registerAsync([
					{
						name,
						useFactory: (configService: ConfigService) => {
							const USER = configService.getOrThrow('RABBITMQ_DEFAULT_USER')
							const PASSWORD = configService.getOrThrow('RABBITMQ_DEFAULT_PASS')
							const HOST = configService.getOrThrow('RABBITMQ_HOST')

							return {
								transport: Transport.RMQ,
								options: {
									urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
									queue: name,
									noAck: false,
									persistent: true,
									queueOptions: {
										durable: true
									}
								}
							}
						},
						inject: [ConfigService]
					}
				])
			],
			exports: [ClientsModule]
		}
	}
}
