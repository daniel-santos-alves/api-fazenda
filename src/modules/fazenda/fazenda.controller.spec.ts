import { Test, TestingModule } from '@nestjs/testing';
import { FazendaController } from './fazenda.controller';
import { FazendaService } from './fazenda.service';
import { FAZENDA_REPOSITORY } from './repositories/fazenda.interface';
import { mockFazendaRepository } from './test/fazenda.mock';

describe('FazendaController', () => {
  let controller: FazendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FazendaController],
      providers: [FazendaService,
        {
          provide: FAZENDA_REPOSITORY,
          useValue: mockFazendaRepository,
        },
      ],
    }).compile();

    controller = module.get<FazendaController>(FazendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
