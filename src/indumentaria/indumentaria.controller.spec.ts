import { Test, TestingModule } from '@nestjs/testing';
import { IndumentariaController } from './indumentaria.controller';

describe('IndumentariaController', () => {
  let controller: IndumentariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndumentariaController],
    }).compile();

    controller = module.get<IndumentariaController>(IndumentariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
