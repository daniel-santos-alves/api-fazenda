import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { faker } from '@faker-js/faker/locale/pt_BR';
import { cnpj, cpf } from 'cpf-cnpj-validator';


describe('SafraController (e2e)', () => {
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

  it('POST-PACH-DELETE /safra - deve criar, atualizar e deletar uma safra', async () => {
    // POST - criando uma safra
    const payloadProdutor = {
      nome_produtor: faker.person.fullName(),
      cpf_produtor: cpf.generate(),
    };

    const { body: createdProdutor } = await request(app.getHttpServer())
      .post('/produtor')
      .send(payloadProdutor)
      .expect(201);
    
    expect(createdProdutor).toHaveProperty('id_produtor');
    expect(createdProdutor.nome_produtor).toBe(payloadProdutor.nome_produtor);

    const idProdutor = createdProdutor.id_produtor;
    const area_total = faker.number.int({ min: 50, max: 1000 });
    const area_agricultavel = faker.number.int({ min: 10, max: area_total - 10 });
    const area_vegetacao = area_total - area_agricultavel;

    const payloadFazenda = {
        id_produtor: idProdutor,
        nome_fazenda: `Fazenda ${faker.person.lastName()}`,
        area_total,
        area_agricultavel,
        area_vegetacao,
        cidade: `${faker.location.city}`,
        estado: `${faker.location.state}`
    };
  
    const { body: createdFazenda } = await request(app.getHttpServer())
        .post('/fazenda')
        .send(payloadFazenda)
        .expect(201);
      
    expect(createdFazenda).toHaveProperty('id_fazenda');
    expect(createdFazenda.nome_fazenda).toBe(payloadFazenda.nome_fazenda);

    const payloadCultura = {
        cultura_plantada: `${faker.commerce.product} `.toString()
    };

    const { body: createdCultura } = await request(app.getHttpServer())
      .post('/culturas')
      .send(payloadCultura)
      .expect(201);
    
    expect(createdCultura).toHaveProperty('id_culturas');
    expect(createdCultura.cultura_plantada).toBe(payloadCultura.cultura_plantada);

    const idCultura = createdCultura.id_culturas;
    const idFazenda = createdFazenda.id_fazenda;

    const payload = {
        id_fazenda: idFazenda,
        id_culturas: idCultura,
        ano: faker.number.int({ min: 2000, max: 2025})
      };
  
      const { body: created } = await request(app.getHttpServer())
        .post('/safra')
        .send(payload)
        .expect(201);
      
    expect(created).toHaveProperty('id_safra');
    expect(created.ano).toBe(payload.ano);

    const idSafra = created.id_safra

    // PACH - atualizando uma safra
    const novoPayload = {
        ano: faker.number.int({ min: 2000, max: 2025})
    };
    
    const response = await request(app.getHttpServer())
      .patch(`/safra/${idSafra}`)
      .send(novoPayload) 
      .expect(200);

    expect(response.body).toHaveProperty('ano', novoPayload.ano);
    expect(response.body).toHaveProperty('id_safra');

    // DELETE - deletando uma safra
    const responseDeleteSafra = await request(app.getHttpServer())
    .delete(`/safra/${idSafra}`)
    .expect(200);
    expect(responseDeleteSafra.body).toEqual({ id_safra: idSafra, deleted: true });

    // DELETE - deletando uma cultura
    const responseDeleteCultura = await request(app.getHttpServer())
    .delete(`/culturas/${idCultura}`)
    .expect(200);
    expect(responseDeleteCultura.body).toEqual({ id_cultura: idCultura, deleted: true });

    // DELETE - deletando uma fazenda
    const responseDeleteFazenda = await request(app.getHttpServer())
    .delete(`/fazenda/${idFazenda}`)
    .expect(200);

    expect(responseDeleteFazenda.body).toEqual({ id_fazenda: idFazenda, deleted: true });

    // DELETE - deletando um produtor
    const responseDeleteProdutor = await request(app.getHttpServer())
    .delete(`/produtor/${idProdutor}`)
    .expect(200);

    expect(responseDeleteProdutor.body).toEqual({ id_produtor: idProdutor, deleted: true });

    });

});