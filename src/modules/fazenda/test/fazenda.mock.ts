import { faker } from '@faker-js/faker';
import { CreateFazendaDto } from '../dto/create-fazenda.dto';

export function generateFazendaMock(): CreateFazendaDto {
  const area_total = faker.number.int({ min: 50, max: 1000 });
  const area_agricultavel = faker.number.int({ min: 10, max: area_total - 10 });
  const area_vegetacao = area_total - area_agricultavel;

  return {
    id_produtor: faker.number.int({ min: 1, max: 20 }),
    nome_fazenda : `Fazenda ${faker.person.lastName()}`,
    area_total,
    area_agricultavel,
    area_vegetacao,
    cidade: `${faker.location.city}`,
    estado: `${faker.location.state}`
  };
}

export const mockFazendaRepository = {
  adicionarFazenda: jest.fn().mockImplementation(({ fazenda }) => Promise.resolve({
    id_fazenda: 1,
    ...fazenda
  })),

  editarFazenda: jest.fn().mockImplementation(({ id_fazenda, fazenda }) => Promise.resolve({
  id_fazenda,
    ...fazenda
  })),

  excluirFazenda: jest.fn().mockImplementation((id_fazenda) =>
    Promise.resolve({
      id_fazenda,
      deleted: true,
    })
  ),
};

