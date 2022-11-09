import { Test, TestingModule } from '@nestjs/testing';
import { IndumentariaService } from './indumentaria.service';

describe('IndumentariaService', () => {
  let service: IndumentariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndumentariaService],
    }).compile();

    service = module.get<IndumentariaService>(IndumentariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
