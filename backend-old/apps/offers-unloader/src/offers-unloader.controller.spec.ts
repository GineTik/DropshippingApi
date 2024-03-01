import { Test, TestingModule } from '@nestjs/testing';
import { OffersUnloaderController } from './offers-unloader.controller';
import { OffersUnloaderService } from './offers-unloader.service';

describe('OffersUnloaderController', () => {
  let offersUnloaderController: OffersUnloaderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OffersUnloaderController],
      providers: [OffersUnloaderService],
    }).compile();

    offersUnloaderController = app.get<OffersUnloaderController>(OffersUnloaderController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(offersUnloaderController.getHello()).toBe('Hello World!');
    });
  });
});
