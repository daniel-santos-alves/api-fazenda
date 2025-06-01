import { Inject, Injectable } from '@nestjs/common';
import { CreateProdutorDto } from './dto/create-produtor.dto';
import { UpdateProdutorDto } from './dto/update-produtor.dto';
import { PRODUTOR_REPOSITORY } from './repositories/produtor.interface';
import { ProdutorRepositoryPrisma } from './repositories/produtor.repository';


@Injectable()
export class ProdutorService {
  constructor (
    @Inject(PRODUTOR_REPOSITORY)
    private readonly produtorRepository: InstanceType<typeof ProdutorRepositoryPrisma>
  ) {}

  async create(createProdutor: CreateProdutorDto) {
    return await this.produtorRepository.adicionarProdutor({produtor: createProdutor})
  }

  async update(id: number, updateProdutor: UpdateProdutorDto) {
    return await this.produtorRepository.editarProdutor({
      idProdutor: id,
      produtor: updateProdutor,
    })
  }

  async remove(id: number) {
    return await this.produtorRepository.excluirProdutor({
      idProdutor: id,
    })
  }
}
