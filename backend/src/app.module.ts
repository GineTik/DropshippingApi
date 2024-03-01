import { getMongoConfig } from '@app/config'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { ApiModule } from './api/api.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
	imports: [
		ApiModule,
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig
		}),
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.env']
		})
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
