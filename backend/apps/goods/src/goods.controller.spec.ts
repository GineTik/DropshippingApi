import { Test, TestingModule } from '@nestjs/testing';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';

describe('GoodsController', () => {
  let goodsController: GoodsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GoodsController],
      providers: [GoodsService],
    }).compile();

    goodsController = app.get<GoodsController>(GoodsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(goodsController.getHello()).toBe('Hello World!');
    });
  });
});
