import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { UpdateGoodsModule } from './update-goods/update-goods.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', './apps/goods/.env']
    }),
    UpdateGoodsModule,
  ],
  controllers: [GoodsController],
  providers: [GoodsService],
})
export class GoodsModule {}
