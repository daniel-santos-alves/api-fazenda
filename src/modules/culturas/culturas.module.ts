import { Module } from '@nestjs/common';
import { CulturasService } from './culturas.service';
import { CulturasController } from './culturas.controller';
import { CULTURAS_REPOSITORY } from './repositories/culturas.interface';
import { CulturasRepositoryPrisma } from './repositories/culturas.repository';

@Module({
  controllers: [CulturasController],
  providers: [CulturasService,
    {
      provide: CULTURAS_REPOSITORY,
      useClass: CulturasRepositoryPrisma,
    }
  ],
})
export class CulturasModule {}
