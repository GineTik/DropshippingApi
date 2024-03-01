import { UserModel } from '@app/models'
import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { AllowedHostsController } from './allowed-hosts.controller'
import { AllowedHostsService } from './allowed-hosts.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'User'
				}
			}
		])
	],
	controllers: [AllowedHostsController],
	providers: [AllowedHostsService]
})
export class AllowedHostsModule {}
