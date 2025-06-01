import { Produtor } from "../../../../prisma/generated/prisma"
import { CreateProdutorDto } from "../dto/create-produtor.dto"

export const PRODUTOR_REPOSITORY = Symbol("PRODUTOR_REPOSITORY")

export interface ProdutorRepository {
    adicionarProdutor(params: {produtor: CreateProdutorDto}): Promise<Produtor | null>;
    editarProdutor(params: {idProdutor: number, produtor: CreateProdutorDto}): Promise<Produtor | null>;
    excluirProdutor(params: {idProdutor: number}): Promise<{ id_produtor: number, deleted: boolean }>;
}