import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TokenModule } from 'src/auth/token/token.module';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
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
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}