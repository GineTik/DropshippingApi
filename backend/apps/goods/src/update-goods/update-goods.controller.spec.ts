import { Test, TestingModule } from '@nestjs/testing';
import { UpdateGoodsController } from './update-goods.controller';
import { UpdateGoodsService } from './update-goods.service';

describe('UpdateGoodsController', () => {
  let controller: UpdateGoodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateGoodsController],
      providers: [UpdateGoodsService],
    }).compile();

    controller = module.get<UpdateGoodsController>(UpdateGoodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
