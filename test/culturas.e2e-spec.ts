import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { faker } from '@faker-js/faker/locale/pt_BR';


describe('CulturasController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], // usa a aplicação real
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST-PACH-DELETE /culturas - deve criar, atualizar e deletar uma cultura', async () => {
    // POST - criando uma cultura
    const payload = {
        cultura_plantada: `${faker.commerce.product} `.toString()
    };

    const { body: created } = await request(app.getHttpServer())
      .post('/culturas')
      .send(payload)
      .expect(201);
    
    expect(created).toHaveProperty('id_culturas');
    expect(created.cultura_plantada).toBe(payload.cultura_plantada);

    const id = created.id_culturas;

    // PACH - atualizando uma cultura
    const novoPayload = {
        cultura_plantada: `${faker.commerce.product} `.toString()
    };
    
    const response = await request(app.getHttpServer())
      .patch(`/culturas/${id}`)
      .send(novoPayload) 
      .expect(200);

    expect(response.body).toHaveProperty('cultura_plantada', novoPayload.cultura_plantada);
    expect(response.body).toHaveProperty('id_culturas');

    // DELETE - deletando uma cultura
    const responseDelete = await request(app.getHttpServer())
    .delete(`/culturas/${id}`)
    .expect(200);

  expect(responseDelete.body).toEqual({ id_cultura: id, deleted: true });

  });
});