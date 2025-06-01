import { Safra } from "../../../../prisma/generated/prisma";
import { CreateSafraDto } from "../dto/create-safra.dto";
import { UpdateSafraDto } from "../dto/update-safra.dto";


export const SAFRA_REPOSITORY = Symbol("SAFRA_REPOSITORY")

export interface SafraRepository {
    adicionarSafra(params: {safra: CreateSafraDto}): Promise<Safra>;
    editarSafra(params: {idSafra: number, safra: UpdateSafraDto}): Promise<Safra>;
    excluirSafra(params: {idSafra: number}): Promise<{ id_safra: number, deleted: boolean }>;
}