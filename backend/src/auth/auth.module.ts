import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypegooseModule } from 'nestjs-typegoose/dist/typegoose.module';
import { UserModel } from 'src/user/user.model';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { MailService } from '../mail/mail.service';
import { TokenService } from './token/token.service';
import { TokenModel } from './token/models/token.model';
import { getJwtConfig } from 'src/config/jwt.config';
import { MailerModule } from '@nestjs-modules/mailer';
import { getMailConfig } from 'src/config/mail.config';
import { TokenModule } from './token/token.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth.guard';

@Module({
  imports: [
    PassportModule,
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
    ConfigModule
  ],
  controllers: [AuthController],
  providers: [AuthService, MailService, JwtStrategy],
})
export class AuthModule {}
