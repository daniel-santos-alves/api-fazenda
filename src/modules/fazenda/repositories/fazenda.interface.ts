import { Fazenda } from "../../../../prisma/generated/prisma"
import { CreateFazendaDto } from "../dto/create-fazenda.dto"
import { UpdateFazendaDto } from "../dto/update-fazenda.dto";


export const FAZENDA_REPOSITORY = Symbol("FAZENDA_REPOSITORY")

export interface FazendaRepository {
    adicionarFazenda(params: {fazenda: CreateFazendaDto}): Promise<Fazenda | null>
    editarFazenda(params: {idFazenda: number, fazenda: UpdateFazendaDto}): Promise<Fazenda | null>;
    excluirFazenda(params: {idFazenda: number}): Promise<{ id_fazenda: number, deleted: boolean }>;
}