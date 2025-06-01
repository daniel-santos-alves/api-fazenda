import { Test, TestingModule } from '@nestjs/testing';
import { ProdutorService } from './produtor.service';
import { PRODUTOR_REPOSITORY } from './repositories/produtor.interface';
import { generateProdutorMock, mockProdutorRepository } from './test/produtor.mocks';
import { cnpj, cpf } from 'cpf-cnpj-validator';


describe('ProdutorService', () => {
 let service: ProdutorService; 

  beforeEach(async () => {

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProdutorService,
        {
          provide: PRODUTOR_REPOSITORY,
          useValue: mockProdutorRepository,
        },
      ],
    }).compile();

    service = module.get<ProdutorService>(ProdutorService);
  });

  it('deve definir service com sucesso', () => {
    expect(service).toBeDefined();
  });

  it('deve criar um produtor com CPF com sucesso', async () => {
    const mock = generateProdutorMock(2); // par = CPF
    const retorno = await service.create(mock);
    
    await service.remove(retorno!.id_produtor);

    expect(retorno).toEqual({
      id_produtor: retorno?.id_produtor,
      nome_produtor: mock.nome_produtor,
      cpf_produtor: mock.cpf_produtor,
      cnpj_produtor: mock.cnpj_produtor
    })
    expect(mockProdutorRepository.adicionarProdutor).toHaveBeenCalledWith({ produtor: mock });
  });

  it('deve criar um produtor com CNPJ com sucesso', async () => {
    const mock = generateProdutorMock(1); // impar = CNPJ
    const retorno = await service.create(mock);

    await service.remove(retorno!.id_produtor);

    expect(retorno).toEqual({
      id_produtor: retorno?.id_produtor,
      nome_produtor: mock.nome_produtor,
      cpf_produtor: mock.cpf_produtor,
      cnpj_produtor: mock.cnpj_produtor
    })
    expect(mockProdutorRepository.adicionarProdutor).toHaveBeenCalledWith({ produtor: mock });
  });

  it('deve atualizar um produtor com CPF e CNPJ com sucesso', async () => {
    const mock = generateProdutorMock(2); // par = CPF
    const retorno = await service.create(mock);
    const NomeAtualizado = 'Novo Nome';
    const cpfAtualizado = cpf.generate();
    const cnpjAtualizado = cnpj.generate();

    const retornoAtualizado = await service.update(1, {
      nome_produtor: NomeAtualizado,
      cpf_produtor: cpfAtualizado,
      cnpj_produtor: cnpjAtualizado
    });

    expect(retornoAtualizado).toEqual({
      // id_produtor: retorno?.id_produtor,
      nome_produtor: NomeAtualizado,
      cpf_produtor: cpfAtualizado,
      cnpj_produtor: cnpjAtualizado
    })
  });

  it('deve excluir um produtor', async () => {
    const retorno = await service.remove(1);
    retorno.id_produtor = retorno.id_produtor['idProdutor']
    
    expect(retorno).toEqual({ id_produtor: 1, deleted: true });
    expect(mockProdutorRepository.excluirProdutor).toHaveBeenCalledWith({idProdutor: 1});
  });

});
