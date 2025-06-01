import { PrismaService } from "../../../database/prisma.service";
import { CreateProdutorDto } from "../dto/create-produtor.dto";
import { ProdutorRepository } from "./produtor.interface";
import { Produtor } from "../../../../prisma/generated/prisma";
import { UpdateProdutorDto } from "../dto/update-produtor.dto";
import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { ProdutorService } from "../../produtor/produtor.service";


@Injectable()
export class ProdutorRepositoryPrisma implements ProdutorRepository{
    constructor (private readonly prismaService: PrismaService) {}
    private readonly logger = new Logger(ProdutorService.name);

    async adicionarProdutor(params: { produtor: CreateProdutorDto; }): Promise<Produtor | null> {
        this.logger.log(`Criando produtor com nome: ${params.produtor.nome_produtor}`);
        try {
            return await this.prismaService.produtor.create({
                data: {
                    nome_produtor: params.produtor.nome_produtor,
                    cpf_produtor: params.produtor.cpf_produtor,
                    cnpj_produtor: params.produtor.cnpj_produtor
                },
            });
        } catch (error) {
            this.logger.error('Erro ao criar produtor', error.stack);
           throw new BadRequestException(error.message);
        }
    }
    async editarProdutor(params: { idProdutor: number; produtor: UpdateProdutorDto; }): Promise<Produtor | null> {
        this.logger.log(`Editando produtor com nome: ${params.produtor.nome_produtor}`);
        try {
            return await this.prismaService.produtor.update({
                data: {
                    nome_produtor: params.produtor.nome_produtor,
                    cpf_produtor: params.produtor.cpf_produtor,
                    cnpj_produtor: params.produtor.cnpj_produtor
                },
                where: {
                    id_produtor: params.idProdutor
                }
            });
        } catch (error) {
            this.logger.error('Erro ao editar produtor', error.stack);
            throw new BadRequestException(error.message);
        }
    }
    async excluirProdutor(params: { idProdutor: number; }): Promise<{ id_produtor: number, deleted: boolean }> {
        this.logger.log(`Deletando produtor com ID: ${params.idProdutor}`);
        
        try {
            await this.prismaService.produtor.delete({
                where: {
                    id_produtor: params.idProdutor
                }
            });
            return { id_produtor: params.idProdutor, deleted: true };
        } catch (error) {
            this.logger.error('Erro ao deletar produtor', error.stack);
            throw new BadRequestException(error.message);
        }
    }
    
}