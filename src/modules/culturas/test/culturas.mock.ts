import { faker } from '@faker-js/faker';
import { CreateCulturaDto } from '../dto/create-cultura.dto';


export function generateCulturaMock(): CreateCulturaDto {
  return {
    cultura_plantada: `${faker.commerce.product} `.toString()
  };
}

export const mockCulturaRepository = {
  adicionarCultura: jest.fn().mockImplementation(({ cultura }) => Promise.resolve({
    id_culturas: 1,
    ...cultura
  })),

  editarCultura: jest.fn().mockImplementation(({ id_culturas, cultura }) => Promise.resolve({
  id_culturas,
    ...cultura
  })),

  excluirCultura: jest.fn().mockImplementation((id_cultura) =>
    Promise.resolve({
      id_cultura,
      deleted: true,
    })
  ),
};