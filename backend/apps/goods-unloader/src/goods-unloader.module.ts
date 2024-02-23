import { Module } from '@nestjs/common';
import { GoodsUnloaderController } from './goods-unloader.controller';
import { GoodsUnloaderService } from './goods-unloader.service';

@Module({
  imports: [],
  controllers: [GoodsUnloaderController],
  providers: [GoodsUnloaderService],
})
export class GoodsUnloaderModule {}
