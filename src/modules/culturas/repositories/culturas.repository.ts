import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { CulturasRepository } from "./culturas.interface";
import { CreateCulturaDto } from "../dto/create-cultura.dto";
import { PrismaService } from "../../../database/prisma.service";
import { Culturas } from "../../../../prisma/generated/prisma";
import { UpdateCulturaDto } from "../dto/update-cultura.dto";
import { CulturasService } from "../culturas.service";

@Injectable()
export class CulturasRepositoryPrisma implements CulturasRepository {
    constructor (private readonly prismaService: PrismaService) {}
    private readonly logger = new Logger(CulturasService.name);

    async adicionarCultura(params: { cultura: CreateCulturaDto; }): Promise<Culturas> {
        this.logger.log(`Criando cultura com nome: ${params.cultura.cultura_plantada}`);
        try {
            return await this.prismaService.culturas.create({
                data: {
                    cultura_plantada: params.cultura.cultura_plantada,
                },
            });
        } catch (error) {
            this.logger.error('Erro ao criar cultura', error.stack);
            throw new BadRequestException(error.message)
        }
    }
    async editarCultura(params: { idCultura: number; cultura: UpdateCulturaDto; }): Promise<Culturas> {
        this.logger.log(`Editando cultura com nome: ${params.cultura.cultura_plantada}`);
        try {
            return await this.prismaService.culturas.update({
                data: {
                    cultura_plantada: params.cultura.cultura_plantada,
                },
                where: {
                    id_culturas: params.idCultura,
                }
            });
        } catch (error) {
            this.logger.error('Erro ao editar cultura', error.stack);
            throw new BadRequestException(error.message)
        }
    }
    async excluirCultura(params: { idCultura: number; }): Promise<{ id_cultura: number, deleted: boolean }> {
        this.logger.log(`Deletando cultura com ID: ${params.idCultura}`);
        try {
            await this.prismaService.culturas.delete({
                where: {
                    id_culturas: params.idCultura,
                },
            });
            return { id_cultura: params.idCultura, deleted: true}
        } catch (error) {
            this.logger.error('Erro ao deletar cultura', error.stack);
            throw new BadRequestException(error.message)
        }
    }

}