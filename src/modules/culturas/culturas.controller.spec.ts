import { Test, TestingModule } from '@nestjs/testing';
import { CulturasController } from './culturas.controller';
import { CulturasService } from './culturas.service';
import { CULTURAS_REPOSITORY } from './repositories/culturas.interface';
import { mockCulturaRepository } from './test/culturas.mock';

describe('CulturasController', () => {
  let controller: CulturasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CulturasController],
      providers: [CulturasService,
        {
          provide: CULTURAS_REPOSITORY,
          useValue: mockCulturaRepository,
        },
      ],
    }).compile();

    controller = module.get<CulturasController>(CulturasController);
  });

  it('deve ser definido controller', () => {
    expect(controller).toBeDefined();
  });
});
