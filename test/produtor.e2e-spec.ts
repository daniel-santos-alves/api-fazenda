import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { faker } from '@faker-js/faker/locale/pt_BR';
import { cnpj, cpf } from 'cpf-cnpj-validator';


describe('ProdutorController (e2e)', () => {
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

  it('POST-PACH-DELETE /produtor - deve criar, atualizar e deletar um produtor (CPF) com sucesso', async () => {
    // POST - criando um produtor 
    const payload = {
      nome_produtor: faker.person.fullName(),
      cpf_produtor: cpf.generate(),
    };

    const { body: created } = await request(app.getHttpServer())
      .post('/produtor')
      .send(payload)
      .expect(201);
    
    expect(created).toHaveProperty('id_produtor');
    expect(created.nome_produtor).toBe(payload.nome_produtor);

    const id = created.id_produtor;

    // PACH - atualizando um produtor
    const novoPayload = {
      nome_produtor: faker.person.fullName(),
      cpf_produtor: cpf.generate(),
    };
    
    const response = await request(app.getHttpServer())
      .patch(`/produtor/${id}`)
      .send(novoPayload) 
      .expect(200);

    expect(response.body).toHaveProperty('nome_produtor', novoPayload.nome_produtor);
    expect(response.body).toHaveProperty('cpf_produtor', novoPayload.cpf_produtor);

    // DELETE - deletando um produtor
    const responseDelete = await request(app.getHttpServer())
    .delete(`/produtor/${id}`)
    .expect(200);

  expect(responseDelete.body).toEqual({ id_produtor: id, deleted: true });

  });
  
  it('POST-PACH-DELETE /produtor - deve criar, atualizar e deletar um produtor (CNPJ) com sucesso', async () => {
    // POST - criando um produtor 
    const payload = {
      nome_produtor: faker.person.fullName(),
      cnpj_produtor: cnpj.generate()
    };

    const {body: created} = await request(app.getHttpServer())
      .post('/produtor')
      .send(payload)
      .expect(201);

    expect(created).toHaveProperty('id_produtor');
    expect(created.nome_produtor).toBe(payload.nome_produtor);

    
    const id = created.id_produtor;

    // PACH - atualizando um produtor
    const novoPayload = {
      nome_produtor: faker.person.fullName(),
      cpf_produtor: cpf.generate(),
    };
    
    const response = await request(app.getHttpServer())
      .patch(`/produtor/${id}`)
      .send(novoPayload) 
      .expect(200);

    expect(response.body).toHaveProperty('nome_produtor', novoPayload.nome_produtor);
    expect(response.body).toHaveProperty('cpf_produtor', novoPayload.cpf_produtor);

    // DELETE - deletando um produtor
    const responseDelete = await request(app.getHttpServer())
    .delete(`/produtor/${id}`)
    .expect(200);

    expect(responseDelete.body).toEqual({ id_produtor: id, deleted: true });    

  });
  
});
