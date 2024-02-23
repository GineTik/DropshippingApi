import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypegooseModule } from 'nestjs-typegoose';
import { getJwtConfig } from './../../config/jwt.config';
import { JwtStrategy } from './access-token.guard';
import { TokenModel } from './models/token.model';
import { TokenService } from './token.service';

@Global()
@Module({
	imports: [
		PassportModule,
		TypegooseModule.forFeature([
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
		}),
	],
	providers: [TokenService, JwtStrategy],
	exports: [TokenService, JwtStrategy]
})
export class TokenModule {}