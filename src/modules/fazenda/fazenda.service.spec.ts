import { Test, TestingModule } from '@nestjs/testing';
import { FazendaService } from './fazenda.service';
import { FAZENDA_REPOSITORY } from './repositories/fazenda.interface';
import { generateFazendaMock, mockFazendaRepository } from './test/fazenda.mock';

describe('FazendaService', () => {
  let service: FazendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FazendaService,
        {
          provide: FAZENDA_REPOSITORY,
          useValue: mockFazendaRepository,
        },
      ],
    }).compile();

    service = module.get<FazendaService>(FazendaService);
  });

  it('deve definir service com sucesso', () => {
    expect(service).toBeDefined();
  });

  it('deve criar uma fazenda com sucesso', async () => {
    const mock = generateFazendaMock(); 
    const retorno = await service.create(mock);
    
    await service.remove(retorno!.id_fazenda);
    
    expect(retorno).toEqual({
      id_fazenda: retorno?.id_fazenda,
      id_produtor: mock.id_produtor,
      nome_fazenda: mock.nome_fazenda,
      area_agricultavel: mock.area_agricultavel,
      area_vegetacao: mock.area_vegetacao,
      area_total: mock.area_total,
      estado: mock.estado,
      cidade: mock.cidade
    })
    expect(mockFazendaRepository.adicionarFazenda).toHaveBeenCalledWith({ fazenda: mock });
  });

  it('deve atualizar uma fazenda com sucesso', async () => {
    const mock = generateFazendaMock();
    const retorno = await service.create(mock);
    const nomeFazendaAtualizado = "Fazenda Sousa"
    const areaVegetacaoAtualizada = 50
    const areaAgricultavelAtualizada = 200
    const areaTotalAtualizada = areaVegetacaoAtualizada + areaAgricultavelAtualizada
    const estadoAtualizado = "Piauí"
    const cidadeAtualizada = "Floriano" 
    
    const retornoAtualizado = await service.update(1, {
      nome_fazenda: nomeFazendaAtualizado,
      area_agricultavel: areaAgricultavelAtualizada,
      area_vegetacao: areaVegetacaoAtualizada,
      area_total: areaTotalAtualizada,
      estado: estadoAtualizado,
      cidade: cidadeAtualizada
    });

    expect(retornoAtualizado).toEqual({
      nome_fazenda: nomeFazendaAtualizado,
      area_agricultavel: areaAgricultavelAtualizada,
      area_vegetacao: areaVegetacaoAtualizada,
      area_total: areaTotalAtualizada,
      estado: estadoAtualizado,
      cidade: cidadeAtualizada
    })
  });
  
  it('deve excluir uma fazenda', async () => {
    const retorno = await service.remove(1);
    retorno.id_fazenda = retorno.id_fazenda['idFazenda']
    
    expect(retorno).toEqual({ id_fazenda: 1, deleted: true });
    expect(mockFazendaRepository.excluirFazenda).toHaveBeenCalledWith({idFazenda: 1});
  });
  
});
