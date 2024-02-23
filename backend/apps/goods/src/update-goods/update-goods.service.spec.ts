import { Test, TestingModule } from '@nestjs/testing';
import { UpdateGoodsService } from './update-goods.service';

describe('UpdateGoodsService', () => {
  let service: UpdateGoodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateGoodsService],
    }).compile();

    service = module.get<UpdateGoodsService>(UpdateGoodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
