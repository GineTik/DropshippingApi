import { Module, Global } from '@nestjs/common';
import { TokenService } from './token.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { getJwtConfig } from 'src/config/jwt.config';
import { TypegooseModule } from 'nestjs-typegoose';
import { TokenModel } from './models/token.model';

@Global()
@Module({
	imports: [
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
	providers: [TokenService],
	exports: [TokenService]
})
export class TokenModule {}