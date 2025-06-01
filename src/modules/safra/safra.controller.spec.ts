import { Test, TestingModule } from '@nestjs/testing';
import { SafraController } from './safra.controller';
import { SafraService } from './safra.service';
import { SAFRA_REPOSITORY } from './repositories/safra.interface';
import { mockSafraRepository } from './test/safra.mock';

describe('SafraController', () => {
  let controller: SafraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SafraController],
      providers: [SafraService,
        {
          provide: SAFRA_REPOSITORY,
          useValue: mockSafraRepository,
        },
      ],
    }).compile();

    controller = module.get<SafraController>(SafraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
