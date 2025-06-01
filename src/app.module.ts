import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './database/prisma.module';
import { ProdutorModule } from './modules/produtor/produtor.module';
import { FazendaModule } from './modules/fazenda/fazenda.module';
import { CulturasModule } from './modules/culturas/culturas.module';
import { SafraModule } from './modules/safra/safra.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  }),
  PrismaModule, ProdutorModule, FazendaModule, CulturasModule, SafraModule, DashboardModule],
  providers: [AppService],
})

@Module({
  imports: [
    
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*'); // aplica para todas as rotas
  }
}
