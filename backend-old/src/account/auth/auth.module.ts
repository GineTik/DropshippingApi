import { TokenModule } from '@app/auth'
import { getMailConfig } from '@app/config'
import { USER } from '@app/constants'
import { MailService } from '@app/mail'
import { MailerModule } from '@nestjs-modules/mailer'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config/dist/config.module'
import { ConfigService } from '@nestjs/config/dist/config.service'
import { TypegooseModule } from 'nestjs-typegoose/dist/typegoose.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

@Module({
	imports: [
		MailerModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMailConfig
		}),
		TypegooseModule.forFeature([
			{
				typegooseClass: USER.MODEL,
				schemaOptions: {
					collection: USER.NAME
				}
			}
		]),
		TokenModule,
		ConfigModule
	],
	controllers: [AuthController],
	providers: [AuthService, MailService, ConfigService]
})
export class AuthModule {}
