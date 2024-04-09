import { USER } from '@app/constants'
import { UserModule } from '@app/user'
import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { SupplierController } from './supplier.controller'
import { SupplierService } from './supplier.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: USER.MODEL,
				schemaOptions: {
					collection: USER.NAME
				}
			}
		]),
		UserModule
	],
	controllers: [SupplierController],
	providers: [SupplierService]
})
export class SupplierModule {}
