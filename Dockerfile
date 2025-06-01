# Etapa 1: build da aplicação
FROM node:20-alpine as builder

WORKDIR /app

# Instala dependências e builda código
COPY package*.json ./
RUN npm install

COPY prisma ./prisma
COPY .env .env

COPY . .

RUN npm run build

# Etapa 2: imagem final para produção
FROM node:20-alpine

WORKDIR /app

# Copia apenas os arquivos necessários
COPY package*.json ./
COPY prisma ./prisma
COPY .env .env

# Instala apenas as dependências de produção
RUN npm install --only=production

# Gera o Prisma Client diretamente na imagem final
RUN npx prisma generate

# Copia artefatos do build
COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main"]
