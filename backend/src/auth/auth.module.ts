import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { TypegooseModule } from 'nestjs-typegoose/dist/typegoose.module';
import { getMailConfig } from 'src/config/mail.config';
import { UserModel } from 'src/user/user.model';
import { MailService } from '../mail/mail.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenModule } from './token/token.module';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMailConfig,
    }),
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: "User"
        }
      },
    ]),
    TokenModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, MailService],
})
export class AuthModule {}
