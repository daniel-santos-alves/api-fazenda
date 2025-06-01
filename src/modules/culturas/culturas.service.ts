import { Inject, Injectable } from '@nestjs/common';
import { CreateCulturaDto } from './dto/create-cultura.dto';
import { UpdateCulturaDto } from './dto/update-cultura.dto';
import { CULTURAS_REPOSITORY } from './repositories/culturas.interface';
import { CulturasRepositoryPrisma } from './repositories/culturas.repository';

@Injectable()
export class CulturasService {
  constructor (
    @Inject(CULTURAS_REPOSITORY)
    private readonly culturaRepository: InstanceType<typeof CulturasRepositoryPrisma>
  ) {}

  async create(createCultura: CreateCulturaDto) {
    return await this.culturaRepository.adicionarCultura({cultura: createCultura})
  }

  async update(id: number, updateCultura: UpdateCulturaDto) {
    return await this.culturaRepository.editarCultura({
      cultura: updateCultura,
      idCultura: id,
    })
  }

  async remove(id: number) {
    return await this.culturaRepository.excluirCultura({
      idCultura: id,
    })
  }
}
