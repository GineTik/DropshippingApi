import { getJwtConfig } from '@app/config'
import { Global, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './access-token.guard'
import { TokenService } from './token.service'

@Global()
@Module({
	imports: [
		PassportModule,
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		})
	],
	providers: [TokenService, JwtStrategy],
	exports: [TokenService, JwtStrategy]
})
export class TokenModule {}
