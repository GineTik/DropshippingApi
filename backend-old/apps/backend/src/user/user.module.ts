import { UserModel } from '@app/models';
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AllowedHostsModule } from './allowed-hosts/allowed-hosts.module';
import { ApiKeysModule } from './api-keys/api-keys.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: UserModel,
      schemaOptions: {
        collection: "User"
      }
    }]),
    ApiKeysModule,
    AllowedHostsModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
