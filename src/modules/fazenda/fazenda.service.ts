import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateFazendaDto } from './dto/create-fazenda.dto';
import { UpdateFazendaDto } from './dto/update-fazenda.dto';
import { FazendaRepositoryPrisma } from './repositories/fazenda.repository';
import { FAZENDA_REPOSITORY } from './repositories/fazenda.interface';

@Injectable()
export class FazendaService {
  prisma: any;
  constructor (
    @Inject(FAZENDA_REPOSITORY)
    private readonly fazendaRepository: InstanceType<typeof FazendaRepositoryPrisma>
  ) {}

  async create(createFazenda: CreateFazendaDto) {
    const { area_total, area_agricultavel, area_vegetacao } = createFazenda
    const soma = area_agricultavel + area_vegetacao
    if (soma > area_total) {
      throw new BadRequestException('A soma das áreas agricultável e de vegetação não pode ultrapassar a área total da fazenda');
    }
    return await this.fazendaRepository.adicionarFazenda({fazenda: createFazenda})
  }

  async update(id: number, updateFazenda: UpdateFazendaDto) {
    return await this.fazendaRepository.editarFazenda({
      idFazenda: id,
      fazenda: updateFazenda,
    })
  }

  async remove(id: number) {
     return await this.fazendaRepository.excluirFazenda({
      idFazenda: id,
     })
  }
   
}
