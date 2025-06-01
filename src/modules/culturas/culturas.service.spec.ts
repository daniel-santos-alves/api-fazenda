import { Test, TestingModule } from '@nestjs/testing';
import { CulturasService } from './culturas.service';
import { CULTURAS_REPOSITORY } from './repositories/culturas.interface';
import { generateCulturaMock, mockCulturaRepository } from './test/culturas.mock';

describe('CulturasService', () => {
  let service: CulturasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CulturasService,
        {
          provide: CULTURAS_REPOSITORY,
          useValue: mockCulturaRepository,
        },
      ],
    }).compile();

    service = module.get<CulturasService>(CulturasService);
  });

  it('deve definir service com sucesso', () => {
    expect(service).toBeDefined();
  });

  it('deve criar uma cultura com sucesso', async () => {
    const mock = generateCulturaMock(); 
    const retorno = await service.create(mock);
    
    await service.remove(retorno!.id_culturas);
    
    expect(retorno).toEqual({
      cultura_plantada: mock.cultura_plantada,
      id_culturas: retorno!.id_culturas
    })
    expect(mockCulturaRepository.adicionarCultura).toHaveBeenCalledWith({ cultura: mock });
  });
  
  it('deve atualizar uma cultura com sucesso', async () => {
    const mock = generateCulturaMock();
    const retorno = await service.create(mock);
    const culturaPlantadaAtualizada = "Milho"
    
    const retornoAtualizado = await service.update(1, {
      cultura_plantada: culturaPlantadaAtualizada
    });

    expect(retornoAtualizado).toEqual({
      cultura_plantada: culturaPlantadaAtualizada
    })
  });

  it('deve excluir uma cultura', async () => {
    const retorno = await service.remove(1);
    retorno.id_cultura = retorno.id_cultura['idCultura']
    
    
    expect(retorno).toEqual({ id_cultura: 1, deleted: true });
    expect(mockCulturaRepository.excluirCultura).toHaveBeenCalledWith({ idCultura: 1 });
  });

});
