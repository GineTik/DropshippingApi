import { Module } from '@nestjs/common';
import { UpdateGoodsService } from './update-goods.service';
import { UpdateGoodsController } from './update-goods.controller';

@Module({
  controllers: [UpdateGoodsController],
  providers: [UpdateGoodsService],
})
export class UpdateGoodsModule {}
