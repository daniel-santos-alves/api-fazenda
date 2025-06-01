import { faker } from '@faker-js/faker';
import { cnpj, cpf } from 'cpf-cnpj-validator';
import { CreateProdutorDto } from '../dto/create-produtor.dto';


export function generateProdutorMock(qtd: number): CreateProdutorDto {
    return {
        nome_produtor: faker.person.fullName(),
        cpf_produtor: qtd % 2 === 0 ? cpf.generate() : undefined,
        cnpj_produtor: qtd % 2 !== 0 ? cnpj.generate() : undefined
    };
}

export const mockProdutorRepository = {
    adicionarProdutor: jest.fn().mockImplementation(({ produtor }) => Promise.resolve({
      id_produtor: 1,
      ...produtor
    })),

    editarProdutor: jest.fn().mockImplementation(({ id_produtor, produtor }) => Promise.resolve({
    id_produtor,
      ...produtor
    })),

    excluirProdutor: jest.fn().mockImplementation((id_produtor) =>
      Promise.resolve({
        id_produtor,
        deleted: true,
      })
    ),
  };

  