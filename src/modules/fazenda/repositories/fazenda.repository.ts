import { BadRequestException, Injectable } from "@nestjs/common";
import { FazendaRepository } from "./fazenda.interface";
import { CreateFazendaDto } from "../dto/create-fazenda.dto";
import { PrismaService } from "../../../database/prisma.service";
import { Fazenda } from "../../../../prisma/generated/prisma";
import { UpdateFazendaDto } from "../dto/update-fazenda.dto";
import { Logger } from '@nestjs/common';
import { FazendaService } from "../fazenda.service";


@Injectable()
export class FazendaRepositoryPrisma implements FazendaRepository {
    constructor (private readonly prismaService: PrismaService) {}
    private readonly logger = new Logger(FazendaService.name);

    async adicionarFazenda(params: { fazenda: CreateFazendaDto; }): Promise< Fazenda | null> {
        this.logger.log(`Criando fazenda com nome: ${params.fazenda.nome_fazenda}`);
        try {
            return await this.prismaService.fazenda.create({
                data: {
                    id_produtor: params.fazenda.id_produtor,
                    nome_fazenda: params.fazenda.nome_fazenda,
                    area_total: params.fazenda.area_total,
                    area_agricultavel: params.fazenda.area_agricultavel,
                    area_vegetacao: params.fazenda.area_vegetacao,
                    cidade: params.fazenda.cidade,
                    estado: params.fazenda.estado
                },
            });
        } catch (error) {
            this.logger.error('Erro ao criar fazenda', error.stack);
            throw new BadRequestException(error.message);
        }
    }

    async editarFazenda(params: { idFazenda: number; fazenda: UpdateFazendaDto; }): Promise< Fazenda | null> {
        this.logger.log(`Editando fazenda com nome: ${params.fazenda.nome_fazenda}`);
        try {
            return await this.prismaService.fazenda.update({
                data: {
                    nome_fazenda: params.fazenda.nome_fazenda,
                    area_total: params.fazenda.area_total,
                    area_agricultavel: params.fazenda.area_agricultavel,
                    area_vegetacao: params.fazenda.area_vegetacao,
                    cidade: params.fazenda.cidade,
                    estado: params.fazenda.estado
                },
                where: {
                    id_fazenda: params.idFazenda
                }
            });
        } catch (error) {
            this.logger.error('Erro ao editar fazenda', error.stack);
            throw new BadRequestException(error.message)
        }
    }

    async excluirFazenda(params: { idFazenda: number; }): Promise<{ id_fazenda: number, deleted: boolean }> {
        this.logger.log(`Deletando fazenda com ID: ${params.idFazenda}`);
        try {
            await this.prismaService.fazenda.delete({
                where: {
                    id_fazenda: params.idFazenda
                },
            });
            return { id_fazenda: params.idFazenda, deleted: true}
        } catch (error) {
            this.logger.error('Erro ao deletar fazenda', error.stack);
            throw new BadRequestException(error.message)
        }
    }
}