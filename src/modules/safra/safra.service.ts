import { Inject, Injectable } from '@nestjs/common';
import { CreateSafraDto } from './dto/create-safra.dto';
import { UpdateSafraDto } from './dto/update-safra.dto';
import { SAFRA_REPOSITORY } from './repositories/safra.interface';
import { SafraRepositoryPrisma } from './repositories/safra.repository';

@Injectable()
export class SafraService {
  constructor (
    @Inject(SAFRA_REPOSITORY)
    private readonly safraRepository: InstanceType<typeof SafraRepositoryPrisma>
  ) {}

  async create(createSafraDto: CreateSafraDto) {
   return await this.safraRepository.adicionarSafra({safra: createSafraDto})
  }

  async update(id: number, updateSafraDto: UpdateSafraDto) {
   return await this.safraRepository.editarSafra({ 
    idSafra: id,
    safra: updateSafraDto,
  })
  }

  async remove(id: number) {
    return await this.safraRepository.excluirSafra({
      idSafra: id,
    })
  }
}
