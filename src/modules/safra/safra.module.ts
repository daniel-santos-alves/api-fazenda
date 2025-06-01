import { Module } from '@nestjs/common';
import { SafraService } from './safra.service';
import { SafraController } from './safra.controller';
import { SAFRA_REPOSITORY } from './repositories/safra.interface';
import { SafraRepositoryPrisma } from './repositories/safra.repository';

@Module({
  controllers: [SafraController],
  providers: [SafraService,
    {
      provide: SAFRA_REPOSITORY,
      useClass: SafraRepositoryPrisma,
    }
  ],
})
export class SafraModule {}
