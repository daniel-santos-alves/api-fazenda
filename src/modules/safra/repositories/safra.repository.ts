import { PrismaService } from "../../../database/prisma.service";
import { SafraRepository } from "./safra.interface";
import { CreateSafraDto } from "../dto/create-safra.dto";
import { UpdateSafraDto } from "../dto/update-safra.dto";
import { Safra } from "../../../../prisma/generated/prisma";
import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { SafraService } from "../safra.service";

@Injectable()
export class SafraRepositoryPrisma implements SafraRepository {
    constructor (private readonly prismaService: PrismaService) {}
    private readonly logger = new Logger(SafraService.name);

    async adicionarSafra(params: { safra: CreateSafraDto; }): Promise<Safra> {
        this.logger.log(`Criando safra: ${params.safra.ano}`);
        try {
            return await this.prismaService.safra.create({
                data: {
                    id_fazenda: params.safra.id_fazenda,
                    id_culturas: params.safra.id_culturas,
                    ano: params.safra.ano,
                },
            });
        } catch(error) {
            this.logger.error('Erro ao criar safra', error.stack);
            throw new BadRequestException(error.message)
        }
    }

    async editarSafra(params: { idSafra: number; safra: UpdateSafraDto; }): Promise<Safra> {
        this.logger.log(`Editando safra: ${params.safra.ano}`);
        try {
            return await this.prismaService.safra.update({
                data: {
                    ano: params.safra.ano,
                },
                where: {
                    id_safra: params.idSafra,
                },
            });
        } catch (error) {
            this.logger.error('Erro ao editar safra', error.stack);
            throw new BadRequestException(error.message)
        }
    }

    async excluirSafra(params: { idSafra: number; }): Promise<{ id_safra: number, deleted: boolean }> {
        this.logger.log(`Deletando safra ID: ${params.idSafra}`);
        try {
            await this.prismaService.safra.delete({
                where:{
                    id_safra: params.idSafra,
                },
            });
            return {
                id_safra: params.idSafra,
                deleted: true,
              }
        } catch (error) {
            this.logger.error('Erro ao deletar safra', error.stack);
            throw new BadRequestException(error.message)
        }
    }
}