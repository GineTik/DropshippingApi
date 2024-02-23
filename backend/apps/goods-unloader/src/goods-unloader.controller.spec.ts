import { Test, TestingModule } from '@nestjs/testing';
import { GoodsUnloaderController } from './goods-unloader.controller';
import { GoodsUnloaderService } from './goods-unloader.service';

describe('GoodsUnloaderController', () => {
  let goodsUnloaderController: GoodsUnloaderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GoodsUnloaderController],
      providers: [GoodsUnloaderService],
    }).compile();

    goodsUnloaderController = app.get<GoodsUnloaderController>(GoodsUnloaderController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(goodsUnloaderController.getHello()).toBe('Hello World!');
    });
  });
});
