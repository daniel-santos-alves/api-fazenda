import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { faker } from '@faker-js/faker/locale/pt_BR';
import { cnpj, cpf } from 'cpf-cnpj-validator';


describe('FazendaController (e2e)', () => {
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

  it('POST-PACH-DELETE /fazenda - deve criar, atualizar e deletar uma fazenda', async () => {
    // POST - criando uma fazenda 
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

    const payload = {
        id_produtor: idProdutor,
        nome_fazenda: `Fazenda ${faker.person.lastName()}`,
        area_total,
        area_agricultavel,
        area_vegetacao,
        cidade: `${faker.location.city}`,
        estado: `${faker.location.state}`
    };
  
    const { body: created } = await request(app.getHttpServer())
        .post('/fazenda')
        .send(payload)
        .expect(201);
      
    expect(created).toHaveProperty('id_fazenda');
    expect(created.nome_fazenda).toBe(payload.nome_fazenda);

    const idFazenda = created.id_fazenda;

    // PACH - atualizando uma fazenda
    const novoPayload = {
        nome_fazenda: `Fazenda ${faker.person.lastName()}`,
        area_total,
        area_agricultavel,
        area_vegetacao,
        cidade: `${faker.location.city}`,
        estado: `${faker.location.state}`
    };
    
    const response = await request(app.getHttpServer())
      .patch(`/fazenda/${idFazenda}`)
      .send(novoPayload) 
      .expect(200);
    
    expect(response.body).toHaveProperty('nome_fazenda', novoPayload.nome_fazenda);
    expect(response.body).toHaveProperty('cidade', novoPayload.cidade);

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