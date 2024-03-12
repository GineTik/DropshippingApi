import { USER } from '@app/constants'
import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserRepository } from './user.repository'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: USER.MODEL,
				schemaOptions: {
					collection: USER.NAME
				}
			}
		])
	],
	providers: [UserRepository],
	exports: [UserRepository]
})
export class UserModule {}
