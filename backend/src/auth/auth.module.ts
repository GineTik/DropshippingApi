import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { TypegooseModule } from 'nestjs-typegoose/dist/typegoose.module';
import { UserModel } from 'src/user/user.model';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { MailService } from './services/mail.service';
import { TokenService } from './services/token.service';
import { TokenModel } from './models/token.model';
import { getJwtConfig } from 'src/config/jwt.config';
import { MailerModule } from '@nestjs-modules/mailer';
import { getMailConfig } from 'src/config/mail.config';

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
    {
      typegooseClass: TokenModel,
      schemaOptions: {
        collection: "Token"
      }
    }
  ]),
  ConfigModule,
  JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: getJwtConfig
  }),],
  controllers: [AuthController],
  providers: [AuthService, MailService, TokenService],
})
export class AuthModule {}
