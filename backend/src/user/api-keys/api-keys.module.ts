import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from '../models/user.model';
import { ApiKeysController } from './api-keys.controller';
import { ApiKeysService } from './api-keys.service';

@Module({
  imports: [
    TypegooseModule.forFeature([{
      typegooseClass: UserModel,
      schemaOptions: {
        collection: "User"
      }
    }]),
  ],
  controllers: [ApiKeysController],
  providers: [ApiKeysService],
})
export class ApiKeysModule {}
