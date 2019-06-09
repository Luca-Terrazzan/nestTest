import { Test, TestingModule } from '@nestjs/testing';
import { AamonController } from './aamon.controller';

describe('Aamon Controller', () => {
  let controller: AamonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AamonController],
    }).compile();

    controller = module.get<AamonController>(AamonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
