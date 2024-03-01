import { Test, TestingModule } from '@nestjs/testing';
import { AllowedHostsService } from './allowed-hosts.service';

describe('AllowedHostsService', () => {
  let service: AllowedHostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllowedHostsService],
    }).compile();

    service = module.get<AllowedHostsService>(AllowedHostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
