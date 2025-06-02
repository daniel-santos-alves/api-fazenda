<h1 align="center">API Fazenda 🐄</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="localhost:3000/documentation" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: UNLICENSED" src="https://img.shields.io/badge/License-UNLICENSED-yellow.svg" />
  </a>
</p>

> API para gerenciamento de fazendas, produtores e dados agrícolas. Desenvolvido com NestJS, Prisma ORM, PostgreSQL e Docker.

<h2>📦 Tecnologias</h2>

<ul>
  <li>
    <a href="https://nestjs.com/" target="_blank">
      <p>NestJS</p>
    </a>
  </li>
  <li>
    <a href="https://www.prisma.io/" target="_blank">
      <p>Prisma ORM</p>
    </a>
  </li>
  <li>
    <a href="https://www.postgresql.org/" target="_blank">
      <p>PostgreSQL</p>
    </a>
  </li>
  <li>
    <a href="https://www.docker.com/" target="_blank">
      <p>Docker</p>
    </a>
  </li>
  <li>
      <p><a href="https://www.docker.com/" target="_blank" >Swagger</a> para documentação da API</p>
  </li>
</ul>
<h2>🚀 Como rodar o projeto</h2>
<h3>🔧 Pré-requisitos</h3>
<ul>
  <li>
      <p><a href="" target="_blank">Node.js</a> (v20+)</p>
  </li>
  <li>
    <a href="https://www.docker.com/" target="_blank">
      <p>Docker</p>
    </a>
  </li>
  <li>
    <a href="https://docs.docker.com/compose/" target="_blank">
      <p>Docker Compose</p>
    </a>
  </li>
</ul>

<h2>Rodando o projeto no ambiente local</h2>

Execute o comando: 
  ```sh
    npm install
  ```

Na raiz do projeto, crie um arquivo ``.env`` para declarar as variáveis de ambiente a seguir:
<h3>⚙️ Variáveis de Ambiente</h3>

Substitua os ``usuario`` e ``senha`` pelos seus dados do PostgreSQL. E crie um nome para o seu banco de dados no lugar de ``nome_banco`` 
  ```sh
    DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_banco"
  ```

Para ambiente Windows
  ```sh
    PRISMA_BINARY_TARGETS=["native"]
  ```

Para ambiente Linux
  ```sh
    PRISMA_BINARY_TARGETS: '["native","linux-musl-openssl-3.0.x"]'
  ```
##
<h3>Gerando o Prisma Client</h3>

 Com base no arquivo ``schema.prisma``

   ```sh
    npx prisma generate
   ```
##
<h3>Aplicando as migrações já existentes</h3>
No diretório ``prisma/migrations`` ao banco de dados

  ```sh
    npx prisma migrate deploy
  ```
##
<h3>Iniciando o servidor local</h3>

  ```sh
    npm run start
  ```
Acesse a API:

  ```sh
    http://localhost:3000
  ```
##
<h3>📑 Documentação</h3>
  
  ```sh
    http://localhost:3000/documentation
  ```
##
<h3>Executando testes unitários</h3>

  ```sh
    npm run test
  ```
##
<h3>Executando teste de integração</h3>

  ```sh
    npm run test:e2e
  ```


<h2>Rodando o projeto com Docker Compose</h2>

<h3>Cria um container Docker a partir do Docker composse</h3>

  ```sh
    docker compose up –build 
  ```
##
<h3>⚙️ Variáveis de Ambiente</h3>
Todas as variáveis de ambiente foram definidas no arquivo Docker compose

##
<h3>Aplicando as migrações já existentes</h3>
No diretório ``prisma/migrations`` ao banco de dados no Docker

  ```sh
    docker compose exec api npx prisma migrate deploy
  ```
##
<h3>Acesse a API:</h3>

  ```sh
    http://localhost:3000
  ```
##
<h3>📑 Documentação</h3>
  
  ```sh
    http://localhost:3000/documentation
  ```


## Desenvolvedor

👤 **Daniel S. Alves**

* Github: [@daniel-santos-alves](https://github.com/daniel-santos-alves)
* LinkedIn: (www.linkedin.com/in/daniel-dos-santos-alves-475a88283)
* email: danielsantosalves@gmail.com
***

