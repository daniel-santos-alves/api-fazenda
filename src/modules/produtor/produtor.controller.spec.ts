import { Test, TestingModule } from '@nestjs/testing';
import { ProdutorController } from './produtor.controller';
import { ProdutorService } from './produtor.service';
import { PRODUTOR_REPOSITORY } from './repositories/produtor.interface';
import { mockProdutorRepository } from './test/produtor.mocks';

describe('ProdutorController', () => {
  let controller: ProdutorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutorController],
      providers: [ProdutorService,
        {
          provide: PRODUTOR_REPOSITORY,
          useValue: mockProdutorRepository,
        },
      ],
    }).compile();

    controller = module.get<ProdutorController>(ProdutorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
