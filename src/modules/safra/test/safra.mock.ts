import { faker } from '@faker-js/faker';
import { CreateSafraDto } from '../dto/create-safra.dto';


export function generateSafraMock(): CreateSafraDto {
  return {
    id_fazenda: faker.number.int({ min: 1, max: 20 }),
    id_culturas: faker.number.int({ min: 1, max: 20 }),
    ano: faker.number.int({ min: 2000, max: 2025})
  };
}

export const mockSafraRepository = {
  adicionarSafra: jest.fn().mockImplementation(({ safra }) => Promise.resolve({
    id_safra: 1,
    ...safra
  })),

  editarSafra: jest.fn().mockImplementation(({ id_safra, safra }) => Promise.resolve({
  id_safra,
    ...safra
  })),

  excluirSafra: jest.fn().mockImplementation((id_safra) =>
    Promise.resolve({
      id_safra,
      deleted: true,
    })
  ),
};