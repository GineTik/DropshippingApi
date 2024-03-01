import { Test, TestingModule } from '@nestjs/testing';
import { AllowedHostsController } from './allowed-hosts.controller';
import { AllowedHostsService } from './allowed-hosts.service';

describe('AllowedHostsController', () => {
  let controller: AllowedHostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllowedHostsController],
      providers: [AllowedHostsService],
    }).compile();

    controller = module.get<AllowedHostsController>(AllowedHostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
