import { Test, TestingModule } from '@nestjs/testing';
import { SafraService } from './safra.service';
import { SAFRA_REPOSITORY } from './repositories/safra.interface';
import { generateSafraMock, mockSafraRepository } from './test/safra.mock';

describe('SafraService', () => {
  let service: SafraService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SafraService,
        {
          provide: SAFRA_REPOSITORY,
          useValue: mockSafraRepository,
        },
      ],
    }).compile();

    service = module.get<SafraService>(SafraService);
  });


  it('deve definir service com sucesso', () => {
    expect(service).toBeDefined();
  });

  it('deve criar uma safra com sucesso', async () => {
    const mock = generateSafraMock();
    const retorno = await service.create(mock);
    
    await service.remove(retorno!.id_safra);

    expect(retorno).toEqual({
      id_safra: retorno.id_safra,
      id_fazenda: mock.id_fazenda,
      id_culturas: mock.id_culturas,
      ano: mock.ano
    })
    expect(mockSafraRepository.adicionarSafra).toHaveBeenCalledWith({ safra: mock });
  });

  it('deve atualizar uma safra com sucesso', async () => {
    const mock = generateSafraMock(); 
    const retorno = await service.create(mock);
    const anoAtualizado = 2030;

    const retornoAtualizado = await service.update(1, {
      ano: anoAtualizado
    });

    expect(retornoAtualizado).toEqual({
      ano: anoAtualizado
    })
  });
 
  it('deve excluir uma safra', async () => {
    const retorno = await service.remove(1);
    retorno.id_safra = retorno.id_safra['idSafra']
    
    expect(retorno).toEqual({ id_safra: 1, deleted: true });
    expect(mockSafraRepository.excluirSafra).toHaveBeenCalledWith({idSafra: 1});
  });

});
