import { Module } from '@nestjs/common';
import { ProdutorService } from './produtor.service';
import { ProdutorController } from './produtor.controller';
import { PRODUTOR_REPOSITORY } from './repositories/produtor.interface';
import { ProdutorRepositoryPrisma } from './repositories/produtor.repository';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [ProdutorController],
  providers: [
    ProdutorService,
    PrismaService, 
    {
      provide: PRODUTOR_REPOSITORY,
      useClass: ProdutorRepositoryPrisma,
    }
  ],
  exports: [ProdutorService],
})
export class ProdutorModule {}
