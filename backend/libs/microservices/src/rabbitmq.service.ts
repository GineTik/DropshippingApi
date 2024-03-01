import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { RmqOptions, Transport } from '@nestjs/microservices'

@Injectable()
export class RabbitMqService {
	constructor(private readonly configService: ConfigService) {}

	getOptions(queue: string): RmqOptions {
		const USER = this.configService.getOrThrow('RABBITMQ_DEFAULT_USER')
		const PASSWORD = this.configService.getOrThrow('RABBITMQ_DEFAULT_PASS')
		const HOST = this.configService.getOrThrow('RABBITMQ_HOST')

		return {
			transport: Transport.RMQ,
			options: {
				urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
				queue: queue,
				queueOptions: {
					durable: true
				}
			}
		}
	}
}
