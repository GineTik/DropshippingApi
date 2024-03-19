import { UserModel } from '@app/models'
import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { ApiKeysController } from './api-keys.controller'
import { ApiKeysService } from './api-keys.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'user'
				}
			}
		])
	],
	controllers: [ApiKeysController],
	providers: [ApiKeysService]
})
export class ApiKeysModule {}
