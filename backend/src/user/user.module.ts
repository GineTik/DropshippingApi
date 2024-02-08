import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TokenModule } from 'src/auth/token/token.module';
import { AllowedHostsModule } from './allowed-hosts/allowed-hosts.module';
import { ApiKeysModule } from './api-keys/api-keys.module';
import { UserModel } from './models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TokenModule,
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
