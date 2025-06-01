import { Module } from '@nestjs/common';
import { FazendaService } from './fazenda.service';
import { FazendaController } from './fazenda.controller';
import { FAZENDA_REPOSITORY } from './repositories/fazenda.interface';
import { FazendaRepositoryPrisma } from './repositories/fazenda.repository';

@Module({
  controllers: [FazendaController],
  providers: [FazendaService,
    {
      provide: FAZENDA_REPOSITORY,
      useClass: FazendaRepositoryPrisma,
    }
  ],
})
export class FazendaModule {}
