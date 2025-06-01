import { Culturas } from "../../../../prisma/generated/prisma";
import { CreateCulturaDto } from "../dto/create-cultura.dto";
import { UpdateCulturaDto } from "../dto/update-cultura.dto";


export const CULTURAS_REPOSITORY = Symbol("CULTURAS_REPOSITORY")

export interface CulturasRepository {
    adicionarCultura(params: {cultura: CreateCulturaDto}): Promise<Culturas>;
    editarCultura(params: {idCultura: number, cultura: UpdateCulturaDto}): Promise<Culturas>;
    excluirCultura(params: {idCultura: number}): Promise<{ id_cultura: number, deleted: boolean }>;
}