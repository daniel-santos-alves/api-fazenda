import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'], // todos os níveis
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove campos que não estão no DTO
      forbidNonWhitelisted: true, // lança erro se enviar campo a mais
      transform: true, // transforma tipos primitivos
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API Fazenda 🐄')
    .setDescription('API para gerenciamento de fazendas, produtores e dados agrícolas. Desenvolvido com NestJS, Prisma ORM, PostgreSQL e Docker.')
    .setVersion('1.0')
    .addServer('http://localhost:3000', 'Local')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
