import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { SupplierModule } from './supplier/supplier.module';

@Module({
	imports: [AuthModule, UserModule, SupplierModule]
})
export class AccountModule {}
